const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
//const connect = require("./db"); // Import the database connection


const port = 3000;
// Session configuration
app.use(
    session({
        secret: "your_secret_key", // Change to a strong, unique secret in production
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 3600000 }, // Session expires in 1 hour
    })
);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./templates");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("home")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
