# Via WordPress

The recommended way to install Underpin is using [Composer](https://getcomposer.org). If you are already using Composer for your WordPress implementation, head on over to the [Composer](composer) setup and follow the instructions there to set up Underpin through your existing Composer setup. If you do _not_ currently have WordPress set up to use Composer, the guide below is intended to help you determine where you can set up Composer.

## Setup Guide - Must-Use Plugin

If you're building custom code for a specific site, the [mu-plugin](https://wordpress.org/documentation/article/must-use-plugins/) directory is most-likely the ideal place for your composer setup. This allows you to set up Underpin as must-use plugin, which ensures that the code is set up as early as possible within WordPress. The instructions below will place the `composer.json` file in the root directory of your project, which gives you the most future-proof options for installing additional Composer packages, and also makes it easy to set up a git monorepo for your site.

First, set up a fresh Composer setup inside your `mu-plugins` directory:

1. Navigate to the root directory of your WordPress installation
2. Run `composer init` and follow the prompts.

Now that you have set up your Composer file, we need to make a small tweak to it in-order to override the location in-which Underpin's files will reside. By default, Composer will try to install these files in the same directory as your `composer.json` file, and we don't really want that. We actually want these to exist inside the `mu-plugins` directory.

To instruct Composer to do this, we need to change the `composer.json` file. Add the following snippet inside your Composer:

```json
  "config": {
    "vendor-dir": "wp-content/mu-plugins/vendor"
  }
```

**Note**: If your composer file already has a `config` declared, you only need to add `"vendor-dir": "wp-content/mu-plugins/vendor"` inside it.

1. Create a new directory inside `{WordPress-root}/wp-content` called `mu-plugins`. If it already exists, move on to the next step.
2. Now install Underpin by running: `composer require underpin/underpin` from your WordPress root directory. After doing this, you should see a `vendor` directory inside your `mu-plugins` directory.
3. Create a new file inside `mu-plugins`. You can name it whatever you want, as long as it is a PHP file.
4. In this newly created file, require the autoloader like so:

```php
<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Load Underpin, and its dependencies.
$autoload = plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

require_once( $autoload );
```

And that's it! You should now be able to use Underpin anywhere in your WordPress installation.

## Setup Guide - WordPress Theme

If you intend to distribute the code you write as a WordPress theme, or you simply prefer to write all of your WordPress code using your WordPress theme, this is your best option.

1. Navigate to the root directory of your WordPress theme.
2. Run `composer init` and follow the prompts.
3. Now install Underpin by running: `composer require underpin/underpin` from your WordPress theme root directory. After doing this, you should see a `vendor` directory inside your theme directory.
4. Add the following code to the top of your theme's `functions.php` file. For more info about this file, [see the WordPress docs](https://developer.wordpress.org/themes/basics/theme-functions/).

```php
// Load Underpin, and its dependencies.
$autoload = trailingslashit(get_template_directory_uri()) . 'vendor/autoload.php';

require_once( $autoload );
```

## Setup Guide - WordPress Plugin

If you intend to distribute the code you write as a WordPress plugin, or you simply prefer to write all of your WordPress code using your WordPress plugin, this is your best option.

1. Navigate to the root directory of your WordPress plugin.
2. Run `composer init` and follow the prompts.
3. Now install Underpin by running: `composer require underpin/underpin` from your WordPress plugin root directory. After doing this, you should see a `vendor` directory inside your plugin directory.
4. Add the following code as early as possible, preferably toward the top of your plugin's entrypoint file. For more info about this file, [see the WordPress docs](https://developer.wordpress.org/plugins/plugin-basics/).

```php
// Load Underpin, and its dependencies.
$autoload = plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

require_once( $autoload );
```

## Distributing Underpin In Your Plugin or Theme

If you plan on distributing a plugin or theme that is created using Composer (including with Underpin), You'll need to use some kind of scoping library, such as [Mozart](https://github.com/coenjacobs/mozart) or [PHP Scoper](https://github.com/humbug/php-scoper). This is important, because it's possible that any other WordPress site is _also_ using Composer, and if they are running a different version of your plugin, that version might load instead of your version, and cause unintended conflicts. These scoping libraries fix this problem by automatically changing the namespace of your Composer dependencies, which allows both versions to run separately without conflict.

This is not something that at this moment has been tested extensively, however Underpin works closely with how Composer naturally works, and should be compatible with the scoping libraries mentioned above.