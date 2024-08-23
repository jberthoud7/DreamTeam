const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
        username: {
            type: String
        },
        password:{
            type: String
        },
        rankings: {
            type: Array
        }
    },
    {
        timestamps: false,
        collection: 'users'
    }
)

module.exports = mongoose.model('User', userSchema)