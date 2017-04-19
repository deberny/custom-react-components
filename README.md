## Intro
This project was 'bootstrapped' with

- Facebook React documentation - [Create React App](https://github.com/facebookincubator/create-react-app)

- Simple React Bootstrap 4 components - [Reactstrap gitHub repo](https://github.com/reactstrap/reactstrap)

- [Reactstrap components example](https://reactstrap.github.io/components/alerts/)

- Font Awesome icons as React components - [react-fa](https://github.com/andreypopp/react-fa)

- Livestax Theme - [livestax-theme](https://theme.livestax.com/components.html#media-badge)

## Table of Contents

- [Steps Overview](#steps-overview)
- [Additional Info](#additional-info)

## Steps Overview

### [Create React App](https://facebook.github.io/react/docs/installation.html#creating-a-new-application)
Follow the instructions in [Create React App](https://facebook.github.io/react/docs/installation.html#creating-a-new-application) to create a new React application

### Include [Livestax Javascript API](https://developers.livestax.com/js_api/?v=0.9.0)
In order for your app to work within Livestax you'll need to include the Livestax API in `public/index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://assets.livestax.com/livestax-0.9.0.min.js"></script>
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <title>My App</title>
  </head>
```

### Add [Livestax Theme](https://theme.livestax.com/home.html)
Livestax Theme holds the styles we use for the apps. It is based on Bootstrap and already includes it's styles, so you don't need to install 'Bootstrap' for the `reactstap` to work.

You can do it by either including it in `public/index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://assets.livestax.com/livestax-0.9.0.min.js"></script>
    <link href="https://assets.livestax.com/theme-0.2.3.min.css" rel="stylesheet">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <title>My App</title>
  </head>
```

or you can add a copy of `theme-0.2.3.min.css` within your project in `/src` folder and then import it in `src/app.js` file (see included `app.js` example file)

```js
 import './theme-0.2.3.min.css';
 ```

### Install React Bootstrap components
This project uses [`reactstrap`](https://reactstrap.github.io/)
To use already build Bootstrap components in React you can import them through `npm install`

```cmd
npm install --save reactstrap react-addons-transition-group react-addons-css-transition-group react react-dom
```

You can start using components by importing the one you need. For example:

```js

import React from 'react';
import { Button } from 'reactstrap';

export default (props) => {
  return (
    <Button color="danger">Danger!</Button>
  );
};

```

### Install Icons components via react-fa

The same applies to [Fontawesome Icons React]((https://github.com/andreypopp/react-fa)) components

Installation Steps outlined [here](https://github.com/andreypopp/react-fa)

### Add a new app in Livestax.

Within the Livestax app, you will need to create a new app as Organization Admin

**Note that**

When developing Apps / Theme Components Components the react app server is set up to listen on port :3000, the same as the Livestax app. Therefore it should be changed to a different port in `package.json`

```js
"scripts": {
  "start": "PORT=3006 react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
}

```
### Add App into your space

You can preview your react app within Livestax when you add an App to a 'page' in 'space'.

When you run `npm-start` it automatically opens the browser at `localhost:3006` where you can see your app running.

A very helpful feature, while developing app within Livestax, when using React is that the `/public/index.html` gets updated within the browser on every change saved within the code. So you don't have to refresh the app in the iframe.

## Additional Info

- Very Useful information about how to work with the React project is explained in [src/README.md](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-bootstrap) provided with the `create-react-app` install

- Alternative Bootstrap 3 components built with React - [React-Bootstrap](https://react-bootstrap.github.io/introduction.html)

- React [docs](https://facebook.github.io/react/docs/hello-world.html)

- [ReactJS For Stupid People](http://blog.andrewray.me/reactjs-for-stupid-people/) - side note: it doesn't imply you're stupid, it's a simpler, more human friendly explanation than the 'documentation'

<q> The documentation is not "accessible" nor "good." </q>

- [Webcomponents](https://www.webcomponents.org/)

- [Polymer](https://www.polymer-project.org/) web components

- [Why React doesn't have templates](https://www.discovermeteor.com/blog/why-doesnt-react-have-templates/)

- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
