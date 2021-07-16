console.log("in API post routes")
const router = require('express').Router();
const Workout = require("../../../models/workout");

//Get the last workout
router.get("/api/workouts", async (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ])
        .then(dbWorkout => {
            res.json(dbWorkout);
        })

        .catch(err => {
            res.status(400).json(err);
        });
});



// Add a new exercise
router.put("/api/workouts/:id", async (req, res) => {
    // try {
    Workout.findByIdAndUpdate(req.params.id,
        { $push: { exercises: req.body } },
        { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        // }
        .catch(err => {
            res.status(400).json(err);
        });
});

// Add a new Workout
router.post("/api/workouts/", (req, res) => {
    Workout.create(req.body).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

// Get the workouts in a range
router.get("/api/workouts/range", ({ }, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ])
        .sort({
            _id: -1
        })
        .limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        });
})




// Export the api routes
module.exports = router;