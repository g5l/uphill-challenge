# uphill-challenge

This is a web application that displays a list of the top GitHub users and repositories based on different criteria, such as the number of followers, stars, or forks.

## Getting Started

In the project directory, you can run:
1. Clone the repository to your local machine.
2. Install the dependencies using npm install.
3. Create a .env file in the root directory and add your GitHub API token as REACT_APP_GITHUB_TOKEN=<your_token_here>.
4. Run the application using `npm start`.
5. Open the application in your browser at http://localhost:3000.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Project

- **api**

  To Communicate the application with an api

- **components**

  To reuse and organize better parts of the application
    
  Folder pattern:
  ```
    index.js              - for exports
    Component.jsx         - Component code
    style.css             - Component style
  ```

- **layout**

  Functions as the shell of a project section

- **pages**

  Mains application pages

- **router**

  Used `react-router-dom` to make it, is responsible to create the navigation 

- **service**

  Maintain the company's rule, and it can use the API layer or other service

- **util**

  Utilities to be reused