# Frontend task
  ## Technolgy stack
      - React
      -  JavaScript
      -  React router dom
      -  CSS
      -  Firebase
  ## Code Structure:
    - Component directory: this is for the components that the project uses.
      - Home
      - Login
      - Sign up
      - Shimmer
      - Error
      - ForgotPassword
    - databse directory: in this we have the firebase configuration.
      - FirebaseCongfig
  
  ## Functionality:
    - Login: authenticates the user and if true then redirects to the home page (Firebase Authentication)
        - It takes email and password then authenticate it with firebase user.
        - Then if authentication is successfull then redirects to home screen else display the error message.
    - Sign Up: Lets user to sign up on the website using firebase and then redirects to the home page.
        - It takes name, email, password and then creates user in the firebase.
        - If success then redirects to home screen else display the error message.
    - Forgot Password: lets user to reset the password by providing the reset link on the email using firebase
        - It takes email then send out a reset link to the given email address.
        - If success then redirects to login screen else display the error message.
        - By the reset link, user can reset the password.
    - Home Page: This page basically has user name, logout and list of the data that is retured by the provided API.
    - Lazy loading: The home page is used with lazy loading where the data is getting fetched with the help of provided API.
    - Shimmer effect: It also has shimmer effect when the data is getting loaded, it will be in the work state.
    -Erorr: This component is used when user uses any wrong string in the url.
    - Infinite scrolling: This is basically used for the API data, and it works when when scroll down in the last then again it loads the data.
    -Add Allow CORS extention to the browser: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
    - The project is already hosted to firebase: [website url](https://frontend-task-a229a.web.app/)




# To run the project on system:
1- Clone the project.
2- Install the dependencies: 
  
  - cd to the root folder
  - npm install
  - then run `npm start` to run the project locally.


### Copyright: This project is developed and published by Asim. 
