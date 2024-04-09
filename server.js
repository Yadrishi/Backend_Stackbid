const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //saves it in req.body

const Person = require("./models/person");
const MenuItem = require("./models/MenuItem");
const SignIn = require("./models/SignIn");
const SignUp = require("./models/SignUp");
const Feedback = require("./models/Feedback");
const HistorySeller = require("./models/HistorySeller");

app.get("/", function (req, res) {
  res.send("helloooo, welcome here!");
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body; //assuming the request body contains the person data
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data saved!");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

//GET
app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched!");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

app.post("/menuitems", async (req, res) => {
  try {
    const data = req.body;
    const newItem = new MenuItem(data);
    const response = await newItem.save(); //wait until the data is saved and then save the response(either success or failure) in the 'response'
    console.log("Response saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500)({ error: "Internal server error" });
  }
});

app.get("/menuitems", async (req, res) => {
  try {
    const data = await MenuItem.find(); //all documents are retrieved from 'MenuItem' collection
    console.log("Data fetched from MenuItems collection");
    res.status(200).json(data);
  } catch {
    console.log(err);
    res.status(500)({ error: "Internal server error" });
  }
});

//Import the router files
//const personRoutes = require('./routes/personRoutes');
const signInRoutes = require("./Routes/signinRoutes");
const signUpRoutes = require("./Routes/signupRoutes");
const FeedbackRoutes = require("./Routes/FeedbackRoutes");
const HistorySeller = require("./Routes/HistorySellerRoutes");
//Use the routers
app.use("/signIn", signInRoutes);
app.use("/signUp", signUpRoutes);
app.use("/Feedback", FeedbackRoutes);
app.use("/HistorySeller", HistorySeller);
// app.get("/godzilla", (req, res) => {
//   res.send("here, watch godzilla and king kong");
// });

// app.post("/items", (req, res) => {
//   console.log("data items");
//   res.send("data saved!");
// });

app.listen(3000, () => {
  console.log("i am listening on port 3000");
});

// const index= require('./index');
// var _= require('lodash');

// console.log("server file is running ");
// // function add(a,b){
// //     return a+b;
// // }

// // var add = function(a,b) {
// // return a+b;
// // }

// // var add= (a,b) => {return a+b;
// var add = (a, b) => a + b;
// var result = add(7, 3);
// console.log(result);

// (function () {
//   console.log("yadrishi dixit");
// })();

// function callback() {
//   console.log("yadrishi is calling a callback function");
// }
// const addition = function (a, b, callback) {
//   var result = a * b;
//   console.log("result : " + result);
//   callback();
// };
// addition(5, 8, callback);

// const notes = require("./notes");
// var age= notes.age;
// console.log("my age is : " + "\n" + age);

// var data =['name','name', 1,2,3,2,1,1,1,'age'];
// var filter= _.uniq(data);
// console.log('filter');

// const jsonString= {"firstname": "yadrishi", "lastname" :"dixit", "age" : 21};
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.firstname);

// const jsonObject = { firstname: "yadrishi", lastname: "dixit", age: 21 };
// console.log(jsonObject.firstname);
