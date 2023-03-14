const {Schema, model} = require('mongoose');

const save = new Schema({
    uid:        {type: String},
    medicineId:  {type: String},
});

module.exports = model('saves', save);