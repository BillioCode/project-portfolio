const express = require("express");
const app = express(); 
const exphbs = require("express-handlebars");
const path = require("path");



const port = process.env.PORT || 8080;




app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", exphbs({
    extname: ".hbs",
    defaultLayout: false
}));

app.set("view engine", ".hbs");





app.get('/', (req, res) => {
    res.send('index Routes is working');
});



app.listen(port, () => {
    console.log("Server is up on port:", port);
})


