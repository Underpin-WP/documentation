# Underpin

**Underpin - to support, justify, or form the basis for.**

Underpin is a PHP-based library that helps facilitate modern PHP practices in PHP applications. Currently, it is designed primarily to make it easier to work with WordPress in a modern PHP context.

The goal of Underpin is to provide utilities and patterns that makes building PHP projects easier. It
provides support for useful utilities that plugins need as they mature, such as a solid error logging utility, a batch
processor for upgrade routines, and a decision tree class that makes extending _and_ debugging multi-layered decisions
way easier than traditional WordPress hooks.

Some key features include:

1. A series of helper classes to make string and array manipulation easier
2. An established object caching pattern that can be extended to work with any platform
3. An extendable PHP logging utility
4. A loader mechanism to load features and additional components
5. Supports PHP dependency injection patterns
6. Powerful array filtering and querying APIs
7. Support for event-based architecture, scoped to individual objects.
8. Support for middleware-based patterns

## Installation

Underpin can be installed in any place you can write code.

### Via Composer

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

### Manually

If you're developing Underpin directly, or simply don't want to use Composer, follow these steps to use:

1. Clone this repository, preferably in the `mu-plugins` directory.
1. Require `Underpin.php`, preferably as a `mu-plugin`.