# ITCSS

This repo is a blank canvas file structure for scripts and styles using [```ITCSS```](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) methodology. 

ITCSS makes no assumptions on which framework you use, however we recommend using a package manager such as [```Bower```](https://bower.io/) to import your framework if, for example, you are using frameworks such as [```Bootstrap```](http://getbootstrap.com/) or [```Foundation```](http://foundation.zurb.com/).

To install just download this repo and place within your public folder / theme etc.

To install your preferred framework, just use a package manager and update the references in style.css

```php
bower install foundation-sites
```

If you are using [```CodeKit```](https://codekitapp.com/) to compile then bower is already included in the filepaths, so you can just set your `@imports` as below.

```scss
// inside styles/style.css

@import 'foundation/settings';
@import 'theme/settings'; 

@import 'foundation';
@import 'theme/theme';
```
