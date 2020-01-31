# ITCSS

This repo is a blank canvas file structure for scripts and styles using [```ITCSS```](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) methodology - using Webpack to build your CSS and JS with sourcemaps and manifest file.

To install just download this repo and place within your public folder / theme etc. and then run

```
npm i
```

We have included two example libraries, `foundation-sites` and `slick-carousel`. To install your preferred framework, just use a package manager and update the references in `styles/style.scss` and `scripts/application.js`.

You can then build JS and CSS files:

```
npm run build
```

You can watch JS and CSS files:

```
npm start
```

Commands can be seen in `package.json` file:

```
"build": "export NODE_ENV=production; webpack --mode production",
"watch": "webpack-dev-server --mode development --watch --hot --inline",
"start": "npm run watch --silent"
```
