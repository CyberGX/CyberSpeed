const mongoose = require('mongoose');
const databaseSchema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const configSchema = new databaseSchema({
    key : {type : String, required: true},
    value : {type : String, required: true}
});
configSchema.plugin(timestamps);

module.exports = mongoose.model('config', configSchema);