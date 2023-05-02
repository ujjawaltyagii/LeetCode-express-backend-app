# LeetCode-express-backend-app

### Tasks Done :
-> Added 5 routes: 
1. Sign Up - <br>
  * Added logic to decode body
  * Checks if body contains both `email` and `password`
  * Stores 'email' and 'password' (as it is for now) in the "USERS" array above (only if the user with the given email does not exist)
  * Return back 200 status code to the client
  
  
  2. Login Route - <br>
  * Added logic to decode body
  * Checks if body contains both `email` and `password`
  * Checks if the user with the given email exists in the USERS array and also checks if the password is same : if NOT then sends status code - 401, if YES then a random 
  token is generated and return that token to user with status code - 200
 
  3. Questions Route - <br>
  * Retrieve all the questions from question array
  * Return the user all the questions in the question array
  
  4. All submissions Route - <br>
  * Returns all the submissions done by user (by using userId to filter)
  
  4. Submissions Route - <br>
  * Let the user submit a problem, randomly accept or reject the solution
  * Store the submission in the SUBMISSION array above
  
 #### Thinga to be done :
 - Route for leaving as hard todos
 - Create a route that lets an admin add a problem
 - Ensure that only admins can do that <br>
 (Plus some frontend )
  
  #### Tech Stack :
   - Nodejs, 
   - Expressjs, 
   - JavaScript and,
   - Postman to test things out
