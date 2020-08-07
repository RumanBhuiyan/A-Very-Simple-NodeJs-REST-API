//A very Simple REST API for GET,POST,PUT,PATCH,DELETE requests
//to check GET,POST,PUT,PATCH,DELETE requests,send request through Postman tool of desktop
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//open cmd and type mongod & hit enter to run mongod.exe to connect your app to mongodb database
mongoose.connect("mongodb://localhost:27017/RESTDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

//Creating The Schema That every model will follow
const bioSchema = new mongoose.Schema({
  name: String,
  roll: Number,
  cgpa: Number,
});

//Creating The Model called people(Plural of person) and assigning its reference to Bio
//every data or entry will under people,CRUD operations will be done using the Bio reference
const Bio = mongoose.model("person", bioSchema);

const ruman = new Bio({
  name: "Ruman",
  roll: 76,
  cgpa: process.env.RUMAN_CGPA,
});
const robiul = new Bio({
  name: "Robiul",
  roll: 79,
  cgpa: process.env.ROBIUL_CGPA,
});
const shahadat = new Bio({
  name: "Shahadat",
  roll: 26,
  cgpa: process.env.SHAHADAT_CGPA,
});
const ontor = new Bio({
  name: "Ontor",
  roll: 64,
  cgpa: process.env.ONTOR_CGPA,
});
const parbez = new Bio({
  name: "Parbez",
  roll: 80,
  cgpa: process.env.PARBEZ_CGPA,
});

//executing once comment them to prevent inserting again and again in every execution
// Bio.insertMany([ruman, robiul, shahadat, ontor, parbez], function (error) {
//   if (error) console.log(error);
//   else console.log("Inserted Successfully!!");
// });

//Below method is known as routing chaining you can create them individually alike
//app.get("/name",function(req,res){})
//app.post("/name",function(req,res){})
//app.put("/name",function(req,res){})
//app.patch("/name",function(req,res){})
//app.delete("/name",function(req,res){})
// from front-end applications when you request alike
//axios.get("/name").then(res=>console.log(res)).catch(error=>console.log(error))
//then this request comes to .get() and send the response to that function
//instead of using front-end application i used postman to send various requests

app
  .route("/name")
  .get(function (req, res) {
    Bio.find(function (error, names) {
      if (error) {
        console.log(error);
      } else {
        res.send(names);
      }
    });
  })

  .post(function (req, res) {
    const { name, roll, cgpa } = req.body;
    const newPerson = new Bio({ name: name, roll: roll, cgpa: cgpa });
    newPerson.save();
    // const newPerson = new Bio(req.body); //its short method
    // newPerson.save();
    res.send("Thanks for posting Data");
  })

  .put(function (req, res) {
    Bio.update({ name: req.body.name }, { cgpa: req.body.cgpa }, function (
      error
    ) {
      console.log(error);
    });
    res.send("Put operation Completed Check your database");
  })

  .patch(function (req, res) {
    Bio.update({ name: req.body.name }, { cgpa: req.body.cgpa }, function (
      error
    ) {
      if (error) {
        console.log(error);
      }
    });
    res.send("Patch Operation Completed View Database to see changes");
  })

  .delete(function (req, res) {
    Bio.deleteOne({ name: req.body.name }, function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log("Deleted Successfully !!");
      }
    });
    res.send("Deleted Successfully");
  });

app.listen("8000", function () {
  console.log("Server is running at port 8000");
});
