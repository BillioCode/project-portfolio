const express = require("express");
const app = express(); 
const exphbs = require("express-handlebars").create; 
const path = require("path");

const port = process.env.PORT || 8080;


app.set("views", path.join(__dirname, "views"));


app.engine(".hbs", exphbs({
    extname: ".hbs",
    defaultLayout: false
}).engine); 

app.set("view engine", ".hbs");

// Route to render the home view
app.get('/', (req, res, next) => {
    res.render("home"); 
});


app.listen(port, () => {
    console.log("Server is up on port:", port);
});
