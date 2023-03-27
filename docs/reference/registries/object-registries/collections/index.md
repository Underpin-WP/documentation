# Collections

A collection is a type of [Object Registry](../../), but it uses static builders to make it possible to build an object registry without needing to declare a dedicated class.

## Creating Collections

Since collections are object registries, you must specify what object each item in the registry will be. This is done using the `make` method. When a collection is made, it will require that all items added to it are an instance of the specified class.

The examples below use a [Mutable Collection](./mutable-collection), however the `make` method works the same with all collections.

```php
use \Underpin\Registries\Mutable_Collection;
class Blog_Post {
  /*...*/
}

class Micro_Post implements Content_Type{
  /*...*/
}

$collection = Mutable_Collection::make(Blog_Post::class);

// Adds the blog post
$collection->add('post_1', new Blog_Post());

// Creates a new instance of blog post using the provided arguments in the array.
$collection->add('post_3', [/*...*/]);

// Throws exception because this isn't an instance of blog post
$collection->add('post_2', new Micro_Post());
```

The second argument in `make` allows you to specify a different class to use as the default factory. This is useful in cases where you have an abstraction and also have a factory that you want to use by default if the items are created using the [array syntax](./abstract-object-registry#array-syntax).

```php
use \Underpin\Registries\Mutable_Collection;
interface Content_Type{
  /*...*/
}

class Micro_Post implements Content_Type{
  /*...*/
}

class Blog_Post implements Content_Type{
  /*...*/
}

class Comment{
  /*...*/
}

// Allow all content types, but default to making a blog post instance when using array syntax.
$collection = Mutable_Collection::make(Content_Type::class, Blog_Post::class);

// Adds the blog post
$collection->add('post_1', new Blog_Post());

// Adds the micro post
$collection->add('post_2', new Micro_Post());

// Creates a new instance of blog post using the provided arguments in the array.
$collection->add('post_3', [/*...*/]);

// Throws exception because comment is not an instance of content type
$collection->add('post_4', new Comment());
```