# Mutable Collection With Remove

`Mutable_Collection_With_Remove` is an implementation of [Collection](./). Unlike an [immutable collection](./immutable-collection), items can always be added, and removed from the collection at any time, and unlike a [mutable collection](./mutable-collection), items can be directly removed from this collection, as well.

## Removing Items

To remove an item from a `Mutable_Collection_With_Remove`, use the `remove` method.

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

// Remove blog post 3 from the list
$collection->remove(3);
```