# List Filter

A list filter makes it possible to filter items from an array of objects using a chain-able query syntax. This feature
is built-into [Object Registries](/reference/registries/object-registries) via the `Object_Registry::query` method,
however it can also be used on raw arrays, as long as each item in the array has the same getters and setters you're
filtering by. This can be done using fully-qualified objects, or by simply converting arrays to objects, as shown below.

```php
use \Underpin\Helpers\Processors\List_Filter;

$ice_cream_order_items = [
  'item_1' => (object) [
      'customer' => (object)['name' => 'Alex', 'id' => 1],
      'scoops' => ['strawberry','chocolate'],
      'cone' => 'waffle',
      'price' => 629,
      'toppings' => ['cheese-crackers']
  ],
  
  'item_2' => (object) [
      'customer' => (object)['name' => 'Devin', 'id' => 2],
      'scoops' => ['chocolate'],
      'cone' => 'chocolate_waffle',
      'price' => 429,
      'toppings' => ['sprinkles']
  ],
  
  'item_3' => (object) [
      'customer' => (object)['name' => 'Kate', 'id' => 3],
      'scoops' => ['vanilla'],
      'cone' => 'basic',
      'price' => 429,
      'toppings' => []
  ],
  
  'item_4' => (object) [
      'customer' => (object)['name' => 'Ben', 'id' => 4],
      'scoops' => ['strawberry','chocolate', 'vanilla'], 
      'cone' => 'bowl',
      'price' => 899,
      'toppings' => ['sprinkles']
  ],
];
```

## Action

An action applies the set of operations against the array, and provides a result in different ways based on the type of
action made.

### Filter Action

The filter action will return a filtered array of items, filtering the results based on the provided criteria in the
operations chained before the call.

```php
// [1,2]
$filtered = (new List_Filter($ice_cream_order_items))->less_than(600)->filter();
```

### Find Action

The find action will return the first item found based on the provided criteria in the operations chained before the
call.

```php
// Returns item 1 in the array above
$filtered = (new List_Filter($ice_cream_order_items))->equals('customer.id', 2)->find();
```

## Operations

An operation is a single specification on how to filter the items in the array. Operations can be chained together, and
will set multiple operations against the filter.

Operations are not applied until either `filter` or `find` is called, and the operations run in the order they're
declared.

```php
// [1]
$filtered = (new List_Filter($ice_cream_order_items))
  ->greater_than('price',629)
  ->less_than('price', 899)
  ->in('toppings','sprinkles')
  ->filter();
```

### Numeric Operations

It's possible to filter numbers based on their value using `less_than`, `greater_than`, `less_than_or_equal`,
and `greater_than_or_equal`.

```php
// [1,2]
$filtered = (new List_Filter($ice_cream_order_items))->less_than(600)->filter();
// [1,2,3]
$filtered = (new List_Filter($ice_cream_order_items))->greater_than(400)->filter();
// [1,2,3]
$filtered = (new List_Filter($ice_cream_order_items))->greater_than_or_equal(429)->filter();
// [0,1,2]
$filtered = (new List_Filter($ice_cream_order_items))->less_than_or_equal(429)->filter();
```

### Instance Operations

It's possible to filter values based on their instance type. Naturally, this requires that the items in-question are an
actual instance. These filters work with the class, as well as any class that they inherit.

```php
interface Content{}

interface Article{}

class Blog_Post implements Content, Article{
  /*..*/
}

class Micro_Post implements Content, Article{
  /*..*/
}

class Comment implements Content{
  /*..*/
}

$posts = [new Blog_Post(),new Blog_Post(), new Micro_Post(), new Comment()];

// [0,1]
$filtered = (new \Underpin\Helpers\Processors\List_Filter($posts))->instance_of(Blog_Post::class);
// [0,1,2]
$filtered = (new \Underpin\Helpers\Processors\List_Filter($posts))->instance_of(Article::class);
// [0,1,3]
$filtered = (new \Underpin\Helpers\Processors\List_Filter($posts))->not_instance_of(Micro_Post::class); 
// [3]
$filtered = (new \Underpin\Helpers\Processors\List_Filter($posts))->not_instance_of(Article::class); 
// [0,1,2]
$filtered = (new \Underpin\Helpers\Processors\List_Filter($posts))->has_all_instances(Content::class, Article::class);
// [2,3]
$filtered = (new \Underpin\Helpers\Processors\List_Filter($posts))->has_any_instances(Micro_Post::class, Comment::class);   
```

### Key Operations

These filters work against the array key instead of the array value.

```php
// [1,2]
$filtered = (new List_Filter($ice_cream_order_items))->key_in('item_2', 'item_3')->filter();
// [0,3]
$filtered = (new List_Filter($ice_cream_order_items))->key_not_in('item_2', 'item_3')->filter();
```

### Value Operations

Value operations work directly against the various property values on the objects inside the array. In order for any
value operation to work, the property must either be `public` (`readonly` is okay!), or has an associated getter method
called `get_${property}` where `${property}` is the name of the property that must be fetched. The getter method takes
priority over the property value, so if you have a getter and a public property, it will use the getter method.

All value operations support dot notation for fetching values nested in objects, and can work with both arrays of
values, and single values.

#### In, Not-In

`in` will set the query to filter out items whose field any of the provided values. `not_in` does the exact opposite.

```php
// [0,2]
$filtered = (new List_Filter($ice_cream_order_items))->in('cone', 'basic','waffle')->filter();
// [1,3]
$filtered = (new List_Filter($ice_cream_order_items))->in('toppings', 'sprinkles')->filter();
// [0,1,3]
$filtered = (new List_Filter($ice_cream_order_items))->in('toppings', 'sprinkles', 'cheese-crackers')->filter();
// [0,2]
$filtered = (new List_Filter($ice_cream_order_items))->not_in('toppings', 'sprinkles')->filter();
// [2]
$filtered = (new List_Filter($ice_cream_order_items))->not_in('toppings', 'sprinkles', 'cheese-crackers')->filter();
// [3]
$filtered = (new List_Filter($ice_cream_order_items))->in('customer.name','Ben')->filter();
```

#### And

Sets the query to filter out items whose field has all the provided values.

```php
// [0,3]
$filtered = (new List_Filter($ice_cream_order_items))->and('scoops', 'strawberry','chocolate')->filter();
```

#### Equals

Sets the query to filter out items whose value is not identical to the provided value.

```php
// [1,2]
$filtered = (new List_Filter($ice_cream_order_items))->and('price', 429)->filter();
// [0]
$filtered = (new List_Filter($ice_cream_order_items))->and('scoops', ['strawberry','chocolate'])->filter();
```

### Callback

If all-else fails, you can chain in a callback to filter items. The example below would filter out any item whose cone
type does not begin with the letter 'b':

```php
// [2,3]
$filtered = (new List_Filter($ice_cream_order_items))
    ->filter_from_callback('cone', fn(string $cone) => 0 === strpos($cone,'b'))
    ->filter();
```

## Seeding

The concrete `List_Filter` class can be seeded directly, using an array. This can be done both with the enums, and
without. The enum is the preferred method, but if you're confident that the input is accurate, you can technically use
an array directly. This can be useful in scenarios such as directly querying a registry using a REST endpoint, or
something like that.

```php
use Underpin\Enums\Filter;

// Using Enums
List_Filter::seed($ice_cream_order_items, [
    Filter::in->field('cone')            => ['waffle', 'chocolate_waffle'],
    Filter::greater_than->field('price') => 429,
])->filter()

// Raw query
List_Filter::seed($ice_cream_order_items, [
    'cone__in'            => ['waffle', 'chocolate_waffle'],
    'price__greater_than' => 429,
])->filter()
```