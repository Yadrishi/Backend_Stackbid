const express = require("express");
const router = express.Router();

const SignIn = require("../models/SignIn");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new SignIn(data);
    const response = await newPerson.save(); //wait until the data is saved and then save the response(either success or failure) in the 'response'
    console.log("Response saved");
    res.status(200).json(response); //response is returned in json format
  } catch (err) {
    console.log(err);
    res.status(500)({ error: "Internal server error" });
  }
});

//GET method to retrieve the data of the Seller or Customer
router.get("/", async (req, res) => {
  try {
    const data = await SignIn.find(); //all documents are retrieved from 'Person' collection
    console.log("Data fetched from Person collection");
    res.status(200).json(data);
  } catch {
    console.log(err);
    res.status(500)({ error: "Internal server error" });
  }
});

//SELLER or CUSTOMER endPoint for fetchng info entered during signin
router.get("/:roleType", async (req, res) => {
  try {
    const roleType = req.params.roleType;
    if (roleType == "seller" || roleType == "customer") {
      const response = await SignIn.find({ role: roleType });
      console.log("Response fetched");
      res.status(200).json({ response });
    } else {
      res.status(404).json({ error: "Invalid role type" });
    }
  } catch {
    console.log(err);
    res.status(500)({ error: "Internal server error" });
  }
});

module.exports = router;
