# Food Truck App

Welcome to the Food Truck App project! This is web application build in React and Material-UI that allows users to view a list of food trucks and their details, as well as add comments to each food truck. The app also includes a search feature that allows users to search for food trucks by name.

## Why React and Material-UI?

I chose to build this app using React and Material-UI because I wanted to create a modern, responsive, and visually appealing user interface. React is a popular JavaScript library for building user interfaces, and Material-UI is a set of React components that implement Google's Material Design guidelines. Together, React and Material-UI make it easy to create a beautiful and functional web application.

## Why not Next.js in this case?

Even though I have experience with Next.js and I know the benefits of server-side-rendering, In this case I chose React because I wanted to build a simple, client-side-rendered application that focuses on the front-end user interface.

## Features

- View a list of food trucks with their details, including name, menu, and location.
- Add comments to each food truck.
- Search for food trucks by name.
- Infinite scroll to load more food trucks as the user scrolls down the page.

## Thinks I would like to improve or add with more time

- Add more features to the app, such as user authentication, user profiles, and the ability to add food trucks to the list.
- Improve the design of the app by adding more styling and animations.
- Add more unit tests and integration tests to ensure the app is working correctly.
- Add End-to-End tests using Cypress.

## Technologies

- React
- Material-UI
- Axios

## Installation and local setup

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Delete .sample from .env.sample and fill in the required environment variables.
4. Install the required dependencies by running `npm install`.
5. Start the server by running `npm dev`.

## Building and Deploy for production (CI/CD)

Execute the following commands in order in your pipeline in order to deploy the server:

1. Add the required environment variables to the server.
2. Install the required dependencies by running `npm install`.
3. Run linting and tests by running `npm run lint` and `npm run test`.
4. Build the project for production by running `npm run build`.

This will create a build and output it to the `dist` directory. You can serve that build code in whatever environment you choose, remembering to set the required environment variables.

## How to use the app

1. Open the app in your web browser.
2. View the list of food trucks on the home page.
3. Click on the arrow button to view the comments for each food truck.
4. Use the search bar to search for food trucks by name.
5. Scroll down the page to load more food trucks.
