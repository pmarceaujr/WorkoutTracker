console.log("in HTML post routes")
const path = require("path");
console.log(__dirname)
let path1 = path.join(__dirname, "../../../public/index.html")
console.log(path1)
const router = require('express').Router();

// Add the GET request for the home page (index.html)
router.get("/", async (req, res) => {
    let path1 = path.join(__dirname, "../../../public/index.html")
    console.log(path1)
    res.sendFile(path.join(__dirname, "../../../public/index.html"));
});

// Add the GET request for the exercise page
router.get("/exercise", async (req, res) => {
    let path1 = path.join(__dirname, "../../../public/exercise.html")
    console.log(path1)
    res.sendFile(path.join(__dirname, "../../../public/exercise.html"));
});

// Add GET request for the Stats Page
router.get("/stats", async (req, res) => {
    let path1 = path.join(__dirname, "../public/stats.html")
    console.log(path1)
    res.sendFile(path.join(__dirname, "../../../public/stats.html"));
});



// Export the HTML routes
module.exports = router;