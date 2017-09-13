var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  // db.Burger.findAll({}).then(function(dbBurgers) {
  //   // We have access to the todos as an argument inside of the callback function
  //   res.render("index", dbBurgers);
  // });
  db.Burger.findAll({}).then(function(data) {
    var hbsObject = {
      Burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function() {
      // We have access to the new todo as an argument inside of the callback function
      res.redirect("/");
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
});

router.put("/:id", function(req, res) {

  db.Burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.redirect("/");
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
});

// Export routes for server.js to use.
module.exports = router;