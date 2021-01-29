# spaceX-master

Deployed Url:- https://spacemaster007.herokuapp.com/

## Tech Stack :
- React- 16.13.1
- HTML5
- CSS3
- NodeJS
- Enzyme & jest
- GitHub
- Heroku
- Visual Studio Code


## About the project

This is a sample project which can be used to view launch program list of spacex. It uses spacex public API to pull its data.
It is designed to be a singe page application, for which following libraries are used:

- react
- redux
- react-router

The application is served by a node.js server which also renders the initial landing page. Following libraries are used by the node.js server:

- express

Unit test cases are writen by using following libraries:

- jest
- enzyme


## Mobile View

![Alt text](https://user-images.githubusercontent.com/75033465/106305129-4f431900-6282-11eb-82cd-7ed73ab505d5.PNG?raw=true "Mobile View")

 
## Tablet View

![Alt text](https://user-images.githubusercontent.com/75033465/106305257-76014f80-6282-11eb-9999-315e66322e23.PNG?raw=true "Tablet View")


## Desktop View

![Alt text](https://user-images.githubusercontent.com/75033465/106305308-89acb600-6282-11eb-9671-70ec58febbba.PNG?raw=true "Desktop View")


**Lighthouse Report**

![Alt text](https://user-images.githubusercontent.com/75033465/106305961-60405a00-6283-11eb-9020-69ba6242e2fa.PNG?raw=true "Lighthouse Report")




## App features

- This is a progressive web application, which can be installed on any PWA compatible mobile device.
- Application is server-side rendered, which helps in boosting the initial page load time and increasing the SEO scores.
- Fully responsive to covers all range of device
- Uses `container component - dummy component` approach
- Multiple highly reusable dummy components result in easier unit testing
- Uses lazy loading to defer loading off-screen images which results in reduced initial page load time
- Uses infinite scrolling approach to render the launch list in multiple steps, resulting in reduced dom elements on initial page load
- Uses memoizing to prevent unnecessary rerenders, increasing the performance of functional components
- Used best practises and performation optimizations, resulting in a high lighthouse score

## Installation

To install, simply clone this repository & run the following command `yarn` or `npm install`, this will install all the dependencies for you.

## Running Project

To run this project locally, run the following command `yarn start` or `npm start`, this will start a local instance of the application & you will be able to run the app in your browser at this url http://localhost:3000/.

## Testing Project

To run unit tests, you can use:
`npm run test`



                                 Developed By [Kunal Kampassi]
