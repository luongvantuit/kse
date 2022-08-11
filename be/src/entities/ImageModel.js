var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    name: {
        type: String,
    },
    desc: {
        type: String,
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
});

//Image is a model which has a schema imageSchema

module.exports = mongoose.model('Image', imageSchema);