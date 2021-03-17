const mongoose = require('mongoose')

const WinnerSchema = new mongoose.Schema(
    {
        player: {
            type: String,
            required: true
        },
        points: {
            type: Number,
            required: true
        }
    }
)

module.exports = mongoose.model('Winner', WinnerSchema)