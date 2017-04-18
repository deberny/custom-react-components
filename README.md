This project was bootstrapped with
[Create React App](https://github.com/facebookincubator/create-react-app)
[Reactstrapp gitHub repo](https://github.com/reactstrap/reactstrap)
[Reactstrap components example](https://reactstrap.github.io/components/alerts/)
[react-fa](https://github.com/andreypopp/react-fa)
[livestax-theme](https://theme.livestax.com/components.html#media-badge)

## Main Objectives

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Steps Overview](#steps-overview)

## Steps Overview

### [Create React App](https://facebook.github.io/react/docs/installation.html#creating-a-new-application)
Follow the instructions in [Create React App](https://facebook.github.io/react/docs/installation.html#creating-a-new-application) to create a new application

### Include livestax API
Add theme-0.2.3.min.css in `/src`  and then import it in `src/app.js` file

```js
 import './theme-0.2.3.min.css';
 ```

### Install React Bootstrap components

```cmd
npm install --save reactstrap react-addons-transition-group react-addons-css-transition-group react react-dom
```

### Install Icons components via react-fa

Steps outlined [here](https://github.com/andreypopp/react-fa)

### Add a new app in Livestax. When developing Apps / Theme Components Components the react app server is set up to listen on port :3000, the same as the Livestax app. Therefore it should be changed to a different port in `package.json`

```js
"scripts": {
  "start": "PORT=3006 react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
}

```

Very Useful information about how to work with the React project is explained in src/README.md
