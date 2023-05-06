const express = require('express')     //impoting express server to call bunch of functions to create http server
const app = express()          //creating an instance (creating a object)
const port = 3003

app.use(express.json());

const USERS = [];

const QUESTIONS  = [
    {
        title: "Two states",
        description: "Given an array, return the max of the array",
        testcases: [{
            input: "[1,2,3,4,5]",
            output: "5"
        }]
    }
];

const SUBMISSIONS = [
    {
        userId: "1",
        questionId: "1",
        code: "function max(arr) { return Math.max(...arr) }",
        status: "accepted"
    },
    {
        userId: "1",
        questionId: "1",
        code: "function max(arr) { return Math.min(...arr) }",
        status: "rejected"
    }
];

app.post('/signup', function(req, res) {     //route
    //add logic to decode body
    
    const { email, password} = req.body;

    //body should have email and password
    
    if(!email || !password)
    {
        res.status(400).send("Email and Password are required");
        return;
    }

    //store email and password (as it is for now) in the "users" arrya above (only if the user with the given email does not exist)

    //first checking if it already exists
    const userexist = USERS.find(user => user.email === email);
    if(userexist)
    {
        res.status(409).send("User already exists");
        return;
    }

    //now entering detail into USERS
    USERS.push({email,password});

    //return back 200 status code to the client
    res.status(200).send("User created successfully");
})

app.post('/login', function(req, res) {     //route-2
    //add logic to decode body
    app.use(express.json());
    const {email, password} = req.body;

    //body should have email and password
    if(!email || !password)
    {
        res.status(400).send("Email and Password are required");
        return;
    }

    //checks if the user with the given email exists in the Users array
    const coexistuser = USERS.find(user => user.email == email)
    if(!coexistuser)
    {
        return res.status(401).send("User not found");
    }

    //also ensure that the password is same
    //if the password is not same return back 401 status code to the client
    if(coexistuser.password !== password)
    {
       return res.status(401).send("Incorrect Password");
    }


    //if the password is the same, return back 200 status code to the client
    //ALso send back a token(any random string will do for now)
    const token = "random-token";
    return res.status(200).json({token});;
  })

app.get('/questions', function(req, res) {     //route 3
    
    //return the user all the questions in the question array
    const ques = QUESTIONS;    //retrieving all questions from question array
    return res.json(questions);
  })
  
app.get('/allsubmissions', function(req, res) {     //route-4
    
    //return the users submissions for this problem
    const extractuserId = req.query.userId;
    const useranssubmission = SUBMISSIONS.find(userr => userr.userId === userId);
    return res.send(useranssubmission);
  })

app.post('/submissions', function(req, res) {     //route-5
    
        //let the user submit a problem, randomly accept or reject the solution
        const { userId, questionId, code} = req.body;

        const newsubmission = {
            userId,
            questionId,
            code,
            status: Math.random() >= 0.5 ? "Accepted" : "Rejected", 
        }
        //Store the submission in the SUBMISSION array above
       SUBMISSIONS.push(newsubmission);

       res.status(201).send("Submission Received");
    })

// leaving as hard todos
// create a route that lets an admin add a problem
// ensure that only admins can do that


//route-checking
// app.get('/chat', function(req, res) {     
//     res.send('<html><body><h1>we chat</h1></body></html>')
//   })

// app.get('/route4', function(req, res) {     //route-checking
//     res.json({
//       name: 'abc',
//       age : 22
//     })
//   })

app.listen(port, function() {         //it starts the http server
  console.log(`Example app listening on port ${port}`)
})