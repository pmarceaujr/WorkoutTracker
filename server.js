const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//! require("./seeders/seed"); // Either npm run seed or keep this in here uncommented and it will run the seed

const PORT = process.env.PORT || 3025;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//require(apiRoute)(app);
app.use(require("./controllers/routes/api/routes.js"));
app.use(require("./controllers/routes/html/routes.js"));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});