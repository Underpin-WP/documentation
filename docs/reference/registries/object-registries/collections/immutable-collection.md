# Immutable Collection

`Immutable_Collection` is a [Collection](./) in which items cannot be added or removed after the items have been locked. Note this does **not** mean that the values of the items the registry holds are immutable. If an immutable collection contains objects with public setters, those items will still update. All this does is prevent you from adding _new_ items to this registry once it's set-up.

## Locking The Collection

The thing that makes an Immutable Collection different from a [Mutable Collection](./mutable-collection) is its ability to lock the collection, making it impossible to add or remove items from the collection after it is locked. This is done using `Immutable_Collection::lock` once you're done adding items.

```php
class Blog_Post {
  /*...*/
}

$immutable_collection = \Underpin\Registries\Immutable_Collection::make(Blog_Post::class);

// Adds the new blog post to the collection.
$immutable_collection->add('blog_post_1',new Blog_Post());

// Locks the collection, making it no-longer possible to mutate.
$immutable_collection->lock();

// Throws exception because the collection is locked.
$immutable_collection->add('blog_post_2',new Blog_Post());
```

Once a collection is locked, it cannot be unlocked. However, you _can_ merge items from the existing collection into a new collection instance.

```php
class Blog_Post {
  /*...*/
}

$immutable_collection = \Underpin\Registries\Immutable_Collection::make(Blog_Post::class);

// Adds the new blog post to the collection.
$immutable_collection->add('blog_post_1',new Blog_Post());

// Locks the collection, making it no-longer possible to mutate.
$immutable_collection->lock();

// Creates a new collection
$new_collection = \Underpin\Registries\Immutable_Collection::make(Blog_Post::class);

// Adds items from the original collection to the new collection.
$new_collection->merge($new_collection, $immutable_collection);

// Lock the new collection
$new_collection->lock();
```

## Special Handling of Seed

Immutable Collections support seeding just like any other [Registry](../../#seed), however, once the registry has finished adding the items to the registry, it automatically locks the items. After this, no more items can be added.

This means that if you want to add items to your registry and lock it programmatically, you must use `Immutable_Collection::add` and then manually lock the registry using `Immutable_Collection::lock`, as detailed above.

```php
use \Underpin\Registries\Immutable_Collection;
use \Underpin\Interfaces\Identifiable_Int;
class Blog_Post implements Identifiable_Int {
  /*...*/
}

// Adds the listed items to the collection, and locks the collection.
$blog_posts = Immutable_Collection::make(Blog_Post::class)->seed([
  new Blog_Post(/*...*/),
  new Blog_Post(/*...*/),
  new Blog_Post(/*...*/),
  new Blog_Post(/*...*/),
  new Blog_Post(/*...*/),
]);

$post = new Blog_Post();

// This would throw an exception because items cannot be added to the collection after seeding.
$blog_posts->add($post->get_id(), $post);
```