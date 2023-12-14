const mongoose = require('mongoose')

const testSchema = mongoose.Schema({
        text: {
            type: String,
            unique: false,
            required: true
        },
    },
    {
        timestamps: true,
        collection: 'testCollection'
    }
)

module.exports = mongoose.model('Test', testSchema)