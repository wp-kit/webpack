# ITCSS

This repo is a blank canvas file structure for scripts and styles using [```ITCSS```](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) methodology. 

ITCSS makes so assumptions on which framework you should use, if any, however we recommend using a package manager such as [```npm```](https://www.npmjs.com/), [```Composer```](https://getcomposer.org/) or [```Bower```](https://bower.io/) to import your framework if, for example, you are using frameworks such as ```Bootstrap``` or ```Foundation```.

To install just download this repo and place within your public folder / theme etc.

To install you preferred framework, just use a package manager and update the references in style.css

```php
composer require zurb/foundation
```

```scss
// inside styles/style.css

@import '../vendor/zurb/foundation/scss/settings/settings';
@import 'theme/settings'; 

@import '../vendor/zurb/foundation/scss/foundation';
@import 'theme/theme';
```
