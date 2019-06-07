# ITCSS

This repo is a blank canvas file structure for scripts and styles using [```ITCSS```](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) methodology - using Rollup to build your CSS and JS with sourcemaps.

To install just download this repo and place within your public folder / theme etc.

We have included two example libraries, `foundation-sites` and `slick-carousel`. To install your preferred framework, just use a package manager and update the references in `styles/style.scss` and `scripts/application.js`.

Commands can be seen in `package.json` file:

```
"scss": "node-sass --output-style expanded --include-path node_modules ./styles/style.scss ./styles/style.css  --source-map ./styles/style.css.map",
"postcss": "postcss --u autoprefixer -u cssnano -o ./styles/style.css < ./styles/style.css",
"build:css": "npm run scss --silent && npm run postcss --silent",
"build:js": "rollup --config",
"build": "npm run build:css --silent && npm run build:js --silent",
"watch:css": "onchange './styles/application/**/*.scss' -- npm run build:css --silent",
"watch:js": "rollup --config --watch",
"watch": "npm-run-all --parallel 'watch:css --silent' 'watch:js --silent'",
"start": "npm run watch --silent"
```