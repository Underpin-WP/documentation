# Object Registries

An Object Registry is a type of [registry](../Registries) that validates that the items added to this registry are all a
specific object instance. Object registries fully support everything that the parent `Registry` supports,
but also includes the `query` method, which can handle many filtering and parsing operations with a registry of
structured objects.

All Object Registries require that you at least specify an abstraction class, and optionally expect a default factory.

## Querying

Object registries can be used to filter the items in a registry using chained filter setters. Behind the scenes, this
uses the [List Filter](/reference/helpers/processors/list-filter)
and [List_Sorter](/reference/helpers/processors/list-sorter) processors. Refer to these documents for more details on the individual methods that can be used for filtering and sorting.

```php
// Default class 
class Product_Review implements \Underpin\Interfaces\Identifiable_String {
  public function __construct(public readonly string $id, public readonly int $product_id, public readonly int $rating, public readonly int $customer_id){
  }
  
  public function get_id(): string{
    return $this->id;
  }
}

// Create a list of products.
$registry = \Underpin\Registries\Immutable_Collection::make(Product_Review::class)->seed([
  new Product_Review(id: 'item_1', product_id: 123, rating: 1, customer_id: 11),
  new Product_Review(id: 'item_2', product_id: 123, rating: 2, customer_id: 12),
  new Product_Review(id: 'item_3', product_id: 123, rating: 4, customer_id: 13),
  new Product_Review(id: 'item_4', product_id: 123, rating: 3, customer_id: 14),
  new Product_Review(id: 'item_5', product_id: 234, rating: 3, customer_id: 15),
  new Product_Review(id: 'item_6', product_id: 234, rating: 4, customer_id: 16),
  new Product_Review(id: 'item_7', product_id: 234, rating: 4, customer_id: 17),
  new Product_Review(id: 'item_8', product_id: 234, rating: 5, customer_id: 18),
  new Product_Review(id: 'item_9', product_id: 456, rating: 4, customer_id: 19),
  new Product_Review(id: 'item_10', product_id: 456, rating: 3, customer_id: 110),
]);

// Returns a new Immutable Collection with items that have a product ID of 123, and is greater than 3. Items are sorted by rating, lowest to highest:
$new_items = $registry->query()
  ->equals('product_id',123)
  ->greater_than('rating',3)
  ->sort_by('rating')
  ->get_results();

// Gets the product whose customer ID is 12:
$product_review = $registry->query()->equals('customer_id',12)->find();
```