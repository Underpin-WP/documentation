# Installation

Underpin can be installed in any place you can write code.

## Via Composer

`composer require underpin/underpin`

**Note** This will add Underpin as a `mu-plugin`, but due to how WordPress handles must-use plugins, this does _not
actually add the plugin to your site_. You must also manually require the file in a mu-plugin PHP file:

```php
<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Load Underpin, and its dependencies.
$autoload = plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

require_once( $autoload );
```

## Manually

If you're developing Underpin directly, or simply don't want to use Composer, follow these steps to use:

1. Clone this repository, preferably in the `mu-plugins` directory.
1. Require `Underpin.php`, preferably as a `mu-plugin`.