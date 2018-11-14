const Sequelize = require("Sequelize");

const db = new Sequelize("shopdb", "root", "password12345", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    min: 0,
    max: 5
  }
});

const User = db.define("Users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Product = db.define("Products", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  manufacturer: {
    type: Sequelize.STRING
  },

  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0.0
  }
});

db.sync()
  .then(() => {
    console.log("database has been created");
  })
  .catch(err => {
    console.error("error creating database");
  });

exports = module.exports = {
  User,
  Product
};
