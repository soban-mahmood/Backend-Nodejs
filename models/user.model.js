const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    username: {
        type: String,

    },
    email: {
        type: String,

    },
    password: {
        type: String,

    }
})

module.exports = mongoose.model('User', userModel)
