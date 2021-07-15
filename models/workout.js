const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise TYPE is required."
            },
            name: {
                type: String,
                trim: true,
                required: "Exercise NAME is required."
            },
            duration: {
                type: Number,
                required: "Exercise DURATION is required."
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;