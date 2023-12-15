const mongoose = require('mongoose')

const playerSchema = mongoose.Schema({
        apiId: {
            type: String
        },
        name:{
            type: String
        },
        dreamTeamId: {
            type: String
        },
        position:{
            type: String
        },
        eloRating:{
            type: String
        }
    },
    {
        timestamps: false,
        collection: 'players'
    }
)

module.exports = mongoose.model('Player', playerSchema)