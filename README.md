## CrudApp-with-Login-Auth-system Application

### Reference
#### Author James Oyanna
* [GitHub](https://github.com/jamesoyanna)
* [LinkedIn](https://www.linkedin.com/in/jamesoyanna)

### This website has been modified to be simplier than the original code written by the author for purpose of creating sample automation framework

### About Project
This project is a CRUD application with login authentication built with React, Express, Nodejs, Mong0DB.

## Application Features
- Login system
- Create a task.
- Update a task
- Delete a task
- Complete a task

## Application Functionalities
Login to the application with the below credentials.


#### Live view of the application Demo can be found here- [Crud-App-Auth](https://crud-app-auth.netlify.app)

### Login Credentials: 
* Username: admin@example.com, 
* Password: yourpassword

## Getting Started

#### Dependencies
##### Client Side

The project is built with;
* [React JS](https://beta.reactjs.org/) -Library for building user interfaces
* [Axios](https://axios-http.com) - Promise based HTTP client for the browser and node.js
* [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
* [React-router](https://reactrouter.com) - Enables the to implementation of dynamic routing in a web app.
* [React Boostrap](https://react-bootstrap.github.io) - Component-based library that provides native Bootstrap components as pure React components.
* [Redux-Thunk](https://www.npmjs.com/package/redux-thunk) -A middleware that lets you call action creators that return a function instead of an action object. 


##### Server Side
* [Express JS](https://expressjs.com/) - flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [Bcrypt JS](https://www.npmjs.com/package/bcrypt) - This module enables storing of passwords as hashed passwords instead of plaintext.
* [Mongoose](https://mongoosejs.com) - Provides a straight-forward, schema-based solution to model application data 
* [Morgan](https://www.npmjs.com/package/morgan) - A Node.js and Express middleware to log HTTP requests and errors.

* [Node.js](https://nodejs.org/en)- Cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

##### Database
* [Node.js](https://nodejs.org/en)- Source-available cross-platform document-oriented database program.

 
### Prerequisites
Ensure you have NodeJS installed by entering node -v on your terminal If you don't have NodeJS installed, go to the NodeJS Website, and follow the download instructions


### Tools Required
The following tools are required to run this application:

* A text editor like Visual Studio Code
* Command Line

### Getting the source code
You can clone the repository directly using this command:
git clone https://github.com/jamesoyanna/Crud-app-Auth.git
OR clicking on the code button ontop to clone the application.

### Installation
Installation steps:

Node.js and Yarn or Npm
Your computer must have installed nodejs, and yarn to run this application You can download Node.js from https://nodejs.org and yarn from https://yarnpkg.com/lang/en/docs/install/ . NPM comes bundled with Node.js

![nodejs](https://user-images.githubusercontent.com/26815113/132867561-bf2ec1a2-cd63-461f-95dd-e95c1c6676c7.PNG)

## Install Npm Packages
After clonning the application, to run the client application locally, you will have to install all the dependencies and packages. 
Open your terminal and navigate into the client folder using the command:
cd client

 Run yarn or npm install from the root of the client folder.

### Development server
#### 1. Install MongoDB and start DB server
     * Open terminal and run 'mongod'

#### 2. Running the client App

  ``` Run terminal 
          * Run 'npm install' in project folder/client  to install the dependency 
          * Run 'npm run start' to start the client app
Run yarn start or npm start from the root of the client folder to start the development server. 
Go to http://localhost:3000 on your browser. Your app should be running.
The app will automatically reload if you make changes to any of the source files.
  ```

#### 3. Running the backend Server
- Open the project folder you cloned. 
Run 'npm install' in the project folder from your terminal.
Then 'npm run start'. 
Your backend server should start running on  port 5000.




