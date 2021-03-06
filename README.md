# Shopping List App written with React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## NPM packages

This app requires the following packages to run (in addition to React itself):
- Axios: `npm install axios`
- JSON Server: `npm install -g json-server`
- React Router DOM: `npm install react-router-dom`

## Before running Dev server

Since the `node_modules` file is not inclued in the repository, first run `npm i` to install it.


## Development server

First, set up the local JSON server by running `json-server --watch data.json`. This will run on `http://localhost:3000/`. 

Then start the project with `npm start`, which will prompt you to select a new port, which means it will run on `http://localhost:3001/`.


## Browser support
Axios is used for http-requests in this app. It should work out of the box in current versions of **Safari**. However, for **Firefox**/**Chrome**, CORS restrictions should be disabled, since Axios PATCH-requests seem to have issues there.

## Current mock users in JSON
The current users that can be used to log-in to the app are 'John Smith' and 'Jane Smith'.


