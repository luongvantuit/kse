var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    nameImage: {
        type: String,
    },
    isUpdated: {
        type: Boolean,
        default: false,
    },
    desc: {
        type: String,
    },
    img:
    {
        data: [],
        contentType: String
    }
});

//Image is a model which has a schema imageSchema

const imageModel = mongoose.model('Image', imageSchema);

module.exports = imageModel;
