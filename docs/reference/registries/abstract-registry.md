# Registry (Abstraction)

The `Registry` is a no-frills base abstraction of a [registry](./). It can be extended and used as you see-fit.

Before using this abstraction, make sure that you wouldn't be better-served using an existing extension of this class.

1. If this registry exists only as a one-off variable instead of an object that needs to be repeatedly instantiated
   throughout your project, you probably want to use the
   concrete [Registry class](./Registry), [Mutable Collection](./object-registries/collections/mutable-collection)
   or [Immutable Collection](./object-registries/collections/immutable-collection) instead.
2. If you're just validating the type of the items in your array, use [Object Registry](./object-registries/abstract-Object-Registry), instead.

All registries should:

1. Store the items provided with the `add` method
2. Validate the items added with `add` using `validate_item`

## Example Registry

Let's say you have a list of ratings, on a scale of 1 to 5, and you want to have a way to run various calculations
against this list. Let's assume this is coming from a database, where we have access to the user who made this review's
ID, as well as their rating.

```php
$user_ratings = ['user-1' => 4, 'user-2' => 2, 'user-3' => 1, 'user-4' => 4, 'user-5' => 2, 'user-6' => 5];
```

You could create a registry that stores these items, and also provides ways to interact with this registry, making it
possible to calculate totals, and other things.

The class declared below makes it possible to create a registry, `Ratings_Collection`. This class will only allow you to
add items to it if the values are integers, and the ratings are between 1 and 5. Note that this also includes two
exceptions, `Rating_Too_Low` and `Rating_Too_High`, which are used in the validation process to throw an exception that
makes clear why the validation failed.

We also added an `average` method, which will calculate the average rating of the items provided.

```php
use \Underpin\Abstracts\Registries\Registry;

class Ratings_Collection extends Registry{

  /**
  * {@inheritDoc}
  */
  protected function validate_item(string $key,mixed $value) : bool
  {
    $valid = is_int($value) && $value >= 1 && $value <= 5;
    
    if(!is_int($value)){
      throw new \Underpin\Exceptions\Invalid_Registry_Item('Could not validate the item');
    }
    
    // This is optional. You don't have to create specific exceptions for everything, but it does make handling invalid cases a little easier.
    if($value < 1){
      throw new Rating_Too_Low('The provided rating is too low. Ratings cannot be less than 1.');
    }
    
    if($value > 5){
      throw new Rating_Too_High('The provided rating is too high. Ratings cannot be greater than 5');
    }
    
    return $valid;
  }
  
  /**
   * Calculates the average rating of the ratings provided.
   * @return float
  */
  public function average(): float
  {
    return array_sum($this->to_array())/count($this->to_array());
  }
}

class Rating_Too_High extends \Underpin\Exceptions\Invalid_Registry_Item{}

class Rating_Too_Low extends \Underpin\Exceptions\Invalid_Registry_Item{}
```

With this registry in-place, you can now interact with it, and add logic that handles things based on the validations.

```php
$ratings_collection = new Ratings_Collection();
$user_ratings = ['user-1' => 4, 'user-2' => 2, 'user-3' => -1, 'user-4' => 4, 'user-5' => 2, 'user-6' => 6];

foreach($user_ratings as $key => $value){
  try{
    $ratings_collection->add($key, $value);
  }catch(Rating_Too_High $e){
    // Cap the rating at 5
    $ratings_collection->add($key, 5);
  }catch(Rating_Too_Low $e){
    // Cap the low end at 1
    $ratings_collection->add($key, 1);
  }catch(\Underpin\Exceptions\Invalid_Registry_Item $e){
    // Probably should just log the error, but you could also simply not catch this and pass it along.
  }
}

// ['user-1' => 4, 'user-2' => 2, 'user-3' => 1, 'user-4' => 4, 'user-5' => 2, 'user-6' => 5]
var_dump($user_ratings->to_array());
var_dump($user_ratings->average());
```

The above would output:

```
array(6) ['user-1' => 4, 'user-2' => 2, 'user-3' => 1, 'user-4' => 4, 'user-5' => 2, 'user-6' => 5]
float(3.0)
```