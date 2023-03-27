# Object Registry (Abstract)

The abstraction for Object Registry makes it possible to implement your own [object registry](./index) by extending a class.

You don't _have_ to create a new class every time you want to make an object registry. You can instead opt to use [a collection](./collections), which will create simple object registries that don't have additional methods beyond the methods that come with this abstraction.

## Example Registry

Let's use an example similar to what is used in the [Registry (abstraction)](../abstract-registry).

Let's say you have a list of `Product_Review` object, which supports a rating on a scale of 1 to 5, like this:

```php
class Product_Review implements \Underpin\Interfaces\Identifiable_String {
  public function __construct(public readonly string $id, public readonly int $product_id, public readonly int $rating){
      if($this->rating > 5){
        $this->rating = 5;
      }
      
      if($this->rating < 1){
        $this->rating = 1;
      }
  }
  
  public function get_id(): string{
    return $this->id;
  }
}
```

And you have cases where you have an array of these different reviews in an array, and you'd like to be able to calculate against these items easily:

```php
$user_ratings = [
  new Product_Review(id: 'item_1', product_id: 123, rating: 5),
  new Product_Review(id: 'item_2', product_id: 123, rating: 3),
  new Product_Review(id: 'item_3', product_id: 123, rating: 2),
  new Product_Review(id: 'item_4', product_id: 123, rating: 4)
];
```

You could create a registry that stores these items, and also provides ways to interact with this registry, making it
possible to calculate totals, and other things.

The class declared below makes it possible to create a registry, `Product_Reviews`. This class will only allow you to
add items to it if the values are an instance of `Product_Review`. In this example, the class is a concrete class instance, but it could also be any valid class, such as a PHP interface or abstract class.

We also added an `average` method, which will calculate the average rating of the items provided.

```php
use \Underpin\Abstracts\Registries\Registry;

class Product_Reviews extends \Underpin\Abstracts\Registries\Object_Registry {

  protected string $abstraction_class = Product_Review::class;
  protected string $default_factory = Product_Review::class;

  /**
   * Calculates the average rating of the ratings provided.
   * @return float
  */
  public function average(): float
  {
    return array_sum($this->to_array())/count($this->to_array());
  }
}
```

## Object Syntax

With this registry in-place, you can now interact with it, and add logic that handles things based on the validations.

```php
$user_ratings = [
  new Product_Review(id: 'item_1', product_id: 123, rating: 5),
  new Product_Review(id: 'item_2', product_id: 123, rating: 3),
  new Product_Review(id: 'item_3', product_id: 123, rating: 2),
  new Product_Review(id: 'item_4', product_id: 123, rating: 4)
];

// Note that we did not need to provide an ID because the objects implement Identifiable.
$reviews = (new Product_Reviews())->seed($user_ratings);
```

## Array Syntax

Since `default_factory` is set in the registry, we can also let the registry construct our instances for us:

```php
$user_ratings = [
  'item_1' => ['item_1',123,5],
  'item_2' => ['item_2',123,3],
  'item_3' => ['item_3',123,2],
  'item_4' => ['item_4',123,4],
];

$reviews = (new Product_Reviews())->seed($user_ratings);
```