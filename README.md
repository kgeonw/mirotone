# Mirotone

### Intro​

Mirotone is a small & lightweight skeleton UI Kit that tries to match Miro styles for building apps and plugins. The package contains a HTML & CSS files which can be used for any project.
​
### Getting started

Install the package as a dependancy on your own project by running
​
```
npm install mirotone
​
// or with yarn
​
yarn add mirotone
```
​
Using something like [PostCSS import](https://github.com/postcss/postcss-import) you can do the following
​
```css
@import 'mirotone/dist/styles.css';
```

Use standart css linking to use the styles right away in your project
```HTML
<link rel="stylesheet" href="https://unpkg.com/mirotone/dist/styles.css" />
```

### Components
​
- typography
- icons
- buttons
- checkbox
- toggle
- radiobutton
- link
- textarea
- input
- select
- tabs

You can check the [documentation](https://mirotone.netlify.app/) for more details.
​
### Development and contributions
​
Clone the repo by running:
​
```
git clone https://github.com/boriskirov/miro-palette-plugins.git
```
​
Install the dependencies
​
```
npm install
```
​
Run the build command in order to build the dist.
​
```
npm run build
```
​
Run the watch command to get the `example/index.html` running with all the documented components.
​
```
npm run watch
```
​
### Roadmap
​
- Improve the documentation 
- Add Templates & layout

​
### Report an issue

If you want to report an issue please fill out the issue [form](https://github.com/boriskirov/mirotone/issues/new).