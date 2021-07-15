console.log("in API post routes")
const router = require('express').Router();
const db = require("../../../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    })
        .catch(err => {
            res.status(400).json(err);
        });
})
// router.get to pull up info for the range page
router.get("/api/workouts/range", ({ }, res) => {
    db.Workout.find({}).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});
// router.post to submit new completed workouts
router.post("/api/workouts/", (req, res) => {
    db.Workout.create(req.body).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});
// router.put to update workouts by MongoDB _id value and update the exercsise body
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        { _id: req.params.id }, { exercises: req.body }
    ).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});


// Export the api routes
module.exports = router;