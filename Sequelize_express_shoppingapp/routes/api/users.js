const User = require("../../db").User;
const route = require("express").Router();

route.get("/", (req, res) => {
  User.findAll()
    .then(users => {
      res.status(200).send(users);
    })

    .catch(err => {
      res.status(500).send({
        error: "could not retrieve users"
      });
    });
});

route.post("/", (req, res) => {
  User.create({
    name: req.body.name
  })
    .then(user => {
      res.status(201).send(user);
    })
    .catch(err => {
      res.status(501).send({
        error: "could not add new user"
      });
    });
});

module.exports = route;
