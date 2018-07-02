# Vue TodoMVC

## About
This is an extremely simple application written with Vue.js. Interested users will not find anything exciting here - quite the opposite, everything here is simple and easy to understand.

Beginners to Vue.js should feel free to clone this repo and run it (see Installation), making any changes they want to see what the resulting change is to the app, in real time.

## Installation
Unlike the vast majority of high-level web applications, this application does not require any installation, dependent libraries, or Node.
To run the app, simple clone this repository, then serve the main directory with your server of choice (Apache, Node, etc.). For example, to run this application with Node installed:

`npm install -g http-server && http-server`
(This will result in the application being served at `localhost:8080`, visit that URL in your browser to see the application)

## Things to Note
- The application uses an X-Template to store the details of the layout. This is one of many ways to organize a template in Vue, and one of the more unique ways.
- No build step is required to run this application, it just works™.
- The Vue code in this application is very minimal - much of the code in the template is Bootstrap, which is required for a sharp presentation.
- This application will only run in Modern browsers