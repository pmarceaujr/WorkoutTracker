console.log("in HTML post routes")
const path = require("path");
console.log(__dirname)
console.log(path.join(__dirname, "../../../public/index.html"))

const router = require('express').Router();

// Add the GET request for the home page (index.html)
router.get("/", async (req, res) => {
    console.log(path.join(__dirname, "../../../public/index.html"))
    res.sendFile(path.join(__dirname, "../../../public/index.html"));
});

// Add the GET request for the exercise page
router.get("/exercise", async (req, res) => {
    console.log(path.join(__dirname, "../../../public/exercise.html"))
    res.sendFile(path.join(__dirname, "../../../public/exercise.html"));
});

// Add GET request for the Stats Page
router.get("/stats", async (req, res) => {
    console.log(path.join(__dirname, "../public/stats.html"))
    res.sendFile(path.join(__dirname, "../../../public/stats.html"));
});



// Export the HTML routes
module.exports = router;