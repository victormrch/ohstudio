# OhStudio website
This project is a challenge from the FrontendPractice website. 
Basically, this project delves into the following aspects:
- Minimal design.
- Scroll animations.
- Hover effects.

Here is the link to the challenge:

([OhStudio Challenge](https://www.frontendpractice.com/projects/oh-studio))

## Run project

- `npm install` - install all dependencies.
- `npm run start` - starts a development server accessible from the browser. The server notices changes made to files and reloads automatically.
- `npm run build` - compiles the web app into a production ready build.
- `npm run format` - Running prettier and format all the files in the app.
- `npm run lint` - Running lint in the project and fix lint errors.
- `npm run test` - Running test with jest.


## Technologies used in the project

- React: to build the application and all its interfaces.
- Redux: to store global variables and have persistence and immutability of data.
- StyledComponents: for application styling.
- Lint: to search for errors and possible bug fixes.
- Prettier: for formatting all the application code.
- Yypescript: to be able to type the classes in the application.
- Jest & Testing-library : to be able to perform unit tests in the application.

## Architecture used in the project

I have followed a pod architecture where it is broken into layout, scenes and pods as follows:

- common file: components that are not linked to the domain and are promotable to libraries.
- common-app: components linked to the domain and that are reused in the application.
- core: transversal components such as, store, router, theme.
- layout: master pages.
- pods: components grouped by domain.
- scenes: pages of the application, a scene can be composed of a layout and one or more pods. 

## Structure and component of the application



## TODOs



##  Improvements in the application







