# React Redux Starter Kit

<!-- [![Build Status](https://travis-ci.org/eldrego/react-redux-starter-kit.svg?branch=master)](https://travis-ci.org/eldrego/react-redux-starter-kit) [![Coverage Status](https://coveralls.io/repos/github/eldrego/react-redux-starter-kit/badge.svg?branch=master)](https://coveralls.io/github/eldrego/react-redux-starter-kit?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/8ab5785ac91be8d1bf0d/maintainability)](https://codeclimate.com/github/eldrego/react-redux-starter-kit/maintainability) -->

[![Hound](https://img.shields.io/badge/Protected_by-Hound-a873d1.svg)](https://travis-ci.org/eldrego/react-redux-starter-kit)

This is repository is created to help bootstrap a React-Redux application.

## Requirements

- node `8.9.0`
- npm `^6.0.1`

## Installation

Create a new project based on `react-redux-starter-kit` by doing the following:

```bash
$ git clone https://github.com/eldrego/react-redux-starter-kit.git <my-project-name>
$ cd <my-project-name>
```

Create your .env file and populate the relevant values based on the sample file .env-sample

Install dependencies

```bash
$ npm install
$ npm run start      # Compiles and launches application
```

If everything works, you should get a message indicating so. In development Application will be served on port 8080
Open the web browser to http://localhost:3000/login

## Project Structure

The project structure presented in this starter kit is outlined below. This structure is only meant to serve as a guide.

```
├── public                # Transpiled react source code
└──src                    # React-redux related files
   ├── __tests__          # Unit tests
   ├── assets             # Assests - Images, stylesheets and
   │   ├── fonts          # Custom fonts for the application
   │   ├── images         # Images
   │   └── sass           # CSS files
   ├── components         # Collections of reducers/constants/actions
   ├── layouts            # Layouts for auth pages and other pages
   ├── pages              # Collections of landing pages for navigation items
   ├── redux              # Collections of reducers/constants/actions
   │   ├── actions        # Actions
   │   ├── reducers       # Reducers
   │   ├── constants.js   # Constants file
   │   └── store.js       # Redux store instance
   ├── routes             # Route declaration for the application  - private and public routes
   └── utils              # Utitily functions used in the application
```

## Contributing

I am more than happy to accept contributions to the project. Contributions can be in the form of feedback, bug reports or even better - pull requests :)
