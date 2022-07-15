const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    userChannel: {
        type: String,
        require: true
    },
    userData: {
        type: Date,
        require: true,
        default: Date.now
    }
})

module.exports = mongoose.model('subscribers', subscriberSchema)