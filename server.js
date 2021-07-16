const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');

//Set the port
const PORT = process.env.PORT || 3025;

//Start the express app
const app = express();

//Use morgan logger set to DEV mode
app.use(logger("dev"));

//Use express middleware to parse incoming urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'))

//Create mongo DB connection 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//require(apiRoute)(app);
//Set the routes
app.use(require("./controllers/routes/api/routes.js"));
app.use(require("./controllers/routes/html/routes.js"));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});