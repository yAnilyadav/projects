const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/api", require("./routes/api").route);

app.listen(2678, () => {
  console.log("server started on localhost:2678");
});

//this is an e-commerce shopping app with frontend backend and database
//first create a database in your laptop in mysql with folloing details
//database-"myshop" 
//go to the folder through command prompt and do npm start
//inside your browser go to localhost:2678
//there all the products will be visible inside the databse
//to add database go to localhost:2678/addproducts.html
//add the info
//again go to localhost:2678 the product would be visible.
