# Array Processor

The Array Processor makes it possible to pass a single array through multiple chained mutation methods, and then output the result as either the transformed array, or a string. It supports all [Array Helper](../array-helper) methods in a chained form.

## Extracting The Array

When you've done all the processing necessary, you can get the array back by calling `to_array()`.

```php
//['BAR','BAZ','FOO']
(new Array_Processor(['foo','bar','baz']))
    ->sort()
    ->map(fn(string $item) => strtoupper($item))
    ->to_array();
```

## Converting a processed array into a string

`Array_Processor` implements `Can_Convert_To_String`, which means that it can be typecast into a string directly, or passed into any method or function that typehints a string, and it will automatically be converted into a string when passed through.

By default, the array processor will convert the array into a comma-separated value, like so:

```php
// 'foo,bar,baz'
(new Array_Processor(['foo','bar','baz']))->to_string();
```

However, if you provide a separator, it will use that instead of `,`:

```php
// 'foo & bar & baz'
(new Array_Processor(['foo','bar','baz']))->set_separator(' & ')->to_string();
```

You can directly echo the processor, or generally treat it like a string, too.

```php
// "The following items are set in the array: foo,bar,baz
$result = "The following items are set in the array: " . (new Array_Processor(['foo','bar','baz']));

// Echos "foo and also bar and also baz"
echo (new Array_Processor(['foo','bar','baz']))->set_separator('and also');
```

## Gotchas

The Array Processor assumes that you will always start, and finish with an array. This means that some implementations, such as `reduce` can cause unexpected errors when the accumulator is something other than an array:

```php
class Tag implements Can_Convert_To_String {

	public function __construct(public readonly string $slug, public readonly string $name){

	}
}

// This won't work.
(new Array_Processor([new Tag('rv-life','RV Life'), new Tag('travel','Travel')]))
	->reduce(function(string $acc, Tag $value){
		$acc .= $value->name . ' ' . $value->slug;

		return $acc;
	},'')
	->to_string();

// But this would! And it would return the same result as what the reducer above would return.
//Note the accumulator is an array, which gets converted to a string.
(new Array_Processor([new Tag('rv-life','RV Life'), new Tag('travel','Travel')]))
	->reduce(function(array $acc, Tag $value){
		$acc[] = $value->name . ' ' . $value->slug;

		return $acc;
	},[])
	->set_separator('')
	->to_string();
```