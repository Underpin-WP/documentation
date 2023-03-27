# Registries

In Underpin, a `Registry` is class that contains a group of items joined together inside an array. Each item in an array has a specific key, and value, cannot be duplicated by default, and items are automatically validated using a validation method when they're added.

In-essence, a registry is just a fancy array. It has a series of validations that give you confidence that the items in the array are what you expect them to be, and are in the correct format, and has a few other methods that make parsing the data in the array easier.

Registries are used in different forms inside Underpin, with several concrete types that can be used directly instead of creating your own.

## Benefits of a Registry

1. It forces items in an array to conform to a specific set of rules. For example, you could make a registry contain nothing but a collection of items that are an instance of a class, and enforce that with the `validate_item` method.
2. Registries throw `Unknown_Registry_Item` when trying to get an item that does not exist. This allows you to write handlers using `try...catch`.
3. It is possible to merge, filter, and loop through items in the registry using method chaining.

## Working With Registries

Note that the examples below assume you have created a class called `Custom_Registry` that extends `Registry`

```php
class Custom_Registry extends \Underpin\Abstracts\Registries\Registry{
 /*...*/
}
```

## Setting Items

### Add

If you want to add an item to a registry, you can use the `add` method:

```php
$ratings_collection = new Custom_Registry();
$ratings_collection->add('unique-key-1', 'value');
$ratings_collection->add('unique-key-2', 'value');
```

`add` can be chained:

```php
$collection = (new Custom_Registry())->add('unique-key-1', 'value')->add('unique-key-2', 'value');
```

### Seed

Often times, you'll be given a regular array of items, and you need to convert that array into a registry. This can be done with `Registry::seed`

```php
$items = ['unique-key-1' => 'value','unique-key-2' => 'value'];
$collection = (new Custom_Registry())->seed($items);
```

You don't have to provide IDs if the list of items are all an object that implements `Identifiable`. The ID will automatically get set from the object's ID.

```php
class Product_Review implements \Underpin\Interfaces\Identifiable_String {
  public function __construct(public readonly string $id, public readonly int $product_id, public readonly int $rating){
    
  }
  
  public function get_id(): string{
    return $this->id;
  }
}

$collection = (new Custom_Registry())->seed([
  new Product_Review(id: 'item_1', product_id: 123, rating: 5),
  new Product_Review(id: 'item_2', product_id: 123, rating: 3),
  new Product_Review(id: 'item_3', product_id: 123, rating: 2),
  new Product_Review(id: 'item_4', product_id: 123, rating: 4)
]);
```

You also don't have to provide an ID if each item in the array is unique. Behind the scenes, `Registry::seed` creates a hash from the value of the item provided, and use that as the key. This means that if you try to add multiples of the same value to an array, it will only exist once because the key will end up being the same.

This comes with a _significant_ caveat - the key of these items will be a hash, which makes the `get` method in registries difficult to use. Generally, this is only used in caching operations or situations where you absolutely cannot identify the item in any other way. I recommend that you treat this as a last-resort.

```php
$cached_items = (new Custom_Registry())->seed([1,2,3,4,5,6,7,8]);
```

### Merging Registries

Sometimes, you'll have multiple registries given to you, and you need to merge them together. This can be done with `Registry::merge`, which works much like PHP's `array_merge` function.

```php
$collection_1 = (new Custom_Registry())->add('unique-key-1', 'value')->add('unique-key-2', 'value');
$collection_2 = (new Custom_Registry())->add('unique-key-3', 'value')->add('unique-key-4', 'value');
$collection_3 = (new Custom_Registry())->add('unique-key-5', 'value')->add('unique-key-4', 'override_value');

$result = (new Custom_Registry())->merge($collection_1, $collection_2, $collection_3);
```

In the example above, `$result` would be a single collection containing all of the items registered in the 3 items given to it. These items are added in the order they're given, and any item that has the same key will be overridden by the later item. In the case above, this means that `unique-key-4` would get replaced with `override_value`.

## Getting Items

If you want to get an item from a registry, you can use the `get` method:

```php
$collection = (new Custom_Registry())->add('unique-key-1', 'foo')->add('unique-key-2', 'bar');

// foo
$value = $collection->get('unique-key-1');

// bar
$another_value = $collection->get('unique-key-2');
```

## Filtering Registry Items

The registry can be filtered using `Registry::filter`. The example below filters items from the collection that are less than `20`.

Note that if you're using a [object registry](./registries/object-registries), you'll have access to a much more-robust set of filtering and sorting tools. This requires that the items in your registry are all an object instance, however.

```php
$collection = (new Custom_Registry())->seed([
  'item_1' => 17,
  'item_2' => 25,
  'item_3' => 50,
  'item_4' => 19
]);

// Returns a collection of items that are less than 20.
$result = $collection->filter(fn(int $amount) => $amount < 20);
```

## Extracting Values

### Extracting The Data Directly

Sometimes, you just want to get the array of data from the collection. This can be done by using `Registry::to_array()`.

```php
$collection = (new Custom_Registry())->seed([
  'item_1' => 17,
  'item_2' => 25,
  'item_3' => 50,
  'item_4' => 19,
]);

$collection->to_array();
```

### Reducing Items With a Callback

The registry can be reduced to a single value using `Registry::reduce`. The example below gets the highest value form the list of items.

```php
$collection = (new Custom_Registry())->seed([
  'item_1' => 17,
  'item_2' => 25,
  'item_3' => 50,
  'item_4' => 19,
]);

$biggest = $collection->reduce(fn(int $acc, int $amount) => $acc < $amount ? $amount : $acc, 0)
```

### Plucking Items From a Collection

Often times, a registry is going to be a collection of objects, or arrays, where each of these items contains multiple pieces of pertinent data related to the item in the collection. In some cases, it is necessary to be able to get a single value from each of the items in these arrays/objects. `Registry::pluck` is the best tool for this job.

```php
$collection = (new Custom_Registry())->seed([
  'item_1' => ['id' => 'item_1', 'product_id' => 123, 'rating' => 5],
  'item_2' => ['id' => 'item_2', 'product_id' => 123, 'rating' => 4],
  'item_3' => ['id' => 'item_3', 'product_id' => 123, 'rating' => 2],
  'item_4' => ['id' => 'item_4', 'product_id' => 123, 'rating' => 3],
]);

$ratings = $collection->pluck(key: 'rating', default: 0);
```

This also works with objects.

```php
class Product_Review implements \Underpin\Interfaces\Identifiable_String {
  public function __construct(public readonly string $id, public readonly int $product_id, public readonly int $rating){
    
  }
  
  public function get_id(): string{
    return $this->id;
  }
}

$collection = (new Custom_Registry())->seed([
  new Product_Review(id: 'item_1', product_id: 123, rating: 5),
  new Product_Review(id: 'item_2', product_id: 123, rating: 3),
  new Product_Review(id: 'item_3', product_id: 123, rating: 2),
  new Product_Review(id: 'item_4', product_id: 123, rating: 4)
]);

$ratings = $collection->pluck(key: 'rating', default: 0);
```

## Cookbook

Using the provided collection, here's a few more examples on how you could chain methods together to get results.

```php
$ratings = (new Custom_Registry())->seed([
   'item_1' => ['id' => 'item_1', 'product_id' => 123, 'rating' => 5],
   'item_2' => ['id' => 'item_2', 'product_id' => 123, 'rating' => 4],
   'item_3' => ['id' => 'item_3', 'product_id' => 123, 'rating' => 2],
   'item_4' => ['id' => 'item_4', 'product_id' => 123, 'rating' => 3],
   'item_5' => ['id' => 'item_5', 'product_id' => 234, 'rating' => 4],
   'item_6' => ['id' => 'item_6', 'product_id' => 234, 'rating' => 3],
   'item_7' => ['id' => 'item_7', 'product_id' => 234, 'rating' => 1],
   'item_8' => ['id' => 'item_8', 'product_id' => 234, 'rating' => 3],
]);
```

Get the rating of all items with a product ID of `234`

```php
$ratings
   ->filter(fn(array $item) => $item['rating'] && $item['product_id'] && $item['product_id'] === 234)
   ->pluck('rating');
```

Separate the registry into two separate registries based on the product ID

```php
$ratings_collection_123 = $ratings->filter(fn(array $item) => $item['product_id'] && $item['product_id'] === 123);
$ratings_collection_234 = $ratings->filter(fn(array $item) => $item['product_id'] && $item['product_id'] === 234);
```

Get the product IDs that have a rating below 2

```php
$products_with_low_ratings = \Underpin\Helpers\Array_Helper::unique(
  $ratings
    ->filter(fn(array $item) => $item['rating'] && $item['rating'] < 2)
    ->pluck('product_id')
);
```