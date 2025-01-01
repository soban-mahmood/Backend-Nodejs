const mongoose = require('mongoose');

const connectedDB = mongoose.connect('mongodb://0.0.0.0/backend-nodejs',).then(() => {
    console.log("bd is connected")
}
)

module.exports = connectedDB;