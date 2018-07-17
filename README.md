# React Redux Starter Kit

[![Build Status](https://travis-ci.org/eldrego/react-redux-starter-kit.svg?branch=master)](https://travis-ci.org/eldrego/react-redux-starter-kit) [![Coverage Status](https://coveralls.io/repos/github/eldrego/react-redux-starter-kit/badge.svg?branch=master)](https://coveralls.io/github/eldrego/react-redux-starter-kit?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/8ab5785ac91be8d1bf0d/maintainability)](https://codeclimate.com/github/eldrego/react-redux-starter-kit/maintainability) [![Hound](https://img.shields.io/badge/Protected_by-Hound-a873d1.svg)](https://travis-ci.org/eldrego/react-redux-starter-kit) [![codecov](https://codecov.io/gh/eldrego/react-redux-starter-kit/branch/master/graph/badge.svg)]

This is a repository that I created to help bootstrap every other React Redux application I would have to create. This repository also includes a server side implementation configured to use a mongo db database.

## Requirements
* node `8.9.0`
* npm `^6.0.1`
* mongodb `3.6.3`

## Installation

After confirming that your environment meets the above requirements, you can create a new project based on `react-redux-starter-kit` by doing the following:

```bash
$ git clone https://github.com/eldrego/react-redux-starter-kit.git <my-project-name>
$ cd <my-project-name>
```
Then install dependencies

```bash
$ npm install
$ npm start                     # Compiles the server-side and client side before the application launches
```
If everything works, you should get a message indicating so. Application will be served on port 8080


While developing, leverage these additional scripts other than `npm start`;

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app for production at `localhost:8080`. HMR will be enabled in development.|
|`start`|Serves your app for developer at `localhost:8080`. Watching files using Nodemon and Webpack watch.|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`dev`|Same as `npm start`, but enables nodemon for the server and webpack watch for the client as well.|
|`test`|Runs unit tests with Mocha and generates a coverage report.|
|`test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
