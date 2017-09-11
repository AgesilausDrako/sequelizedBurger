// Import the ORM to create functions that will interact with the database.
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Burger = sequelize.define("burger", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the name of the character (a string)
  burger_name: Sequelize.STRING,
  // the character's role (a string)
  devoured: Sequelize.BOOLEAN,
}, {
  timestamps: false
});

// Syncs with DB
Burger.sync();

// // Makes the Character Model available for other files (will also create a table)
// module.exports = Burger;
// var orm = require("../config/orm.js");

// var burger = {
//   selectAll: function(cb) {
//     orm.selectAll("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   insertOne: function(cols, vals, cb) {
//     orm.insertOne("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   updateOne: function(objColVals, condition, cb) {
//     orm.updateOne("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (burgers_controller.js).
// module.exports = burger;