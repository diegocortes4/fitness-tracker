const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter an exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter an exercise"
            },
            duration: { type: Number },
            weight: { type: Number },
            reps: { type: Number },
            sets: { type: Number },
            distance: { type: Number }
        }
    ]
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
