# ITCSS

This repo is a blank canvas file structure for scripts and styles using ITCSS methodology. 

ITCSS makes so assumptions on which framework you should use, if any, however we recommend using a package mamager such as node, composer or bower to import your framework if you are using frameworks such as Bootstrap or Foundation.

Examples of how to include the framework in the ITCSS strucutre can be found in the style.scss file.

To install just download this repo and place within your public folder / theme etc.

To install you preferred framework, just use a package manager and update the references in style.css

```bash
composer require zurb/foundation
```

```scss
// inside styles/style.css

@import '../vendor/zurb/foundation/scss/settings/settings';
@import 'theme/settings'; 

@import '../vendor/zurb/foundation/scss/foundation';
@import 'theme/theme';
```
