var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/quotes", function(req, res) {
    db.Quotes.findAll({}).then(function(quotes) {
      console.log(quotes);
      // res.json(quotes);
    });
  });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
};
