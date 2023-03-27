# Registry (Concrete)

The non-abstract `Registry` class makes it possible to create a custom [registry](./) _without_ needing to declare a new class that extends the [Abstract Registry](./Abstract-Registry) class.

Before using this factory, make sure that you wouldn't be better-served with something more-specific. For example, if each item in the intended registry must be a specific instance of a class, use a [Collection](./object-registries/collections).

Everything about this registry works exactly like what's documented in the Abstract Registry, the only difference is that it can be instantiated, like so:

```php
$registry = new \Underpin\Factories\Registry(validate_callback: fn(string|int $key, mixed $value) => is_int($value))
```

This would compose a one-off registry that validates that the items added to it are integers.

```php
$registry->add('key', 'invalid'); // This would throw Invalid_Registry_Item
$registry->add('key', 1); // This would add the number 1 to the registry.
```