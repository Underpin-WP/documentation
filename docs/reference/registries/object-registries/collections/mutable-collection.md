# Mutable Collection

`Mutable_Collection` is a basic implementation of [Collection](./). Unlike an [immutable collection](./immutable-collection), items can always be added, to this collection, but it cannot be directly _removed_ from the collection instance.

If you want to remove an item from the collection, use [Mutable_Collection_With_Remove](mutable-collection-with-remove), instead.

Alternatively, you can filter the item using a query, but this does _not_ mutate the original collection, it creates a new one:

```php
use \Underpin\Registries\Immutable_Collection;
use \Underpin\Interfaces\Identifiable_Int;
class Blog_Post implements Identifiable_Int {
  public function __construct(protected int $id){
  
  }
  
  public function get_id() : ?int{
    return $this->id;
  }
}

$collection = Immutable_Collection::make(Blog_Post::class)->seed([
  new Blog_Post(1),
  new Blog_Post(2),
  new Blog_Post(3),
  new Blog_Post(4),
  new Blog_Post(5),
]);

// Get a registry that does not include the item with the ID of 3
$filtered = $collection->query()->key_not_in(3)->get_results();
```