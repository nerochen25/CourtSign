const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourtSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    //court types: challenge, training, regular
    type: {
        type: String,
        required: true
    },
    // players: {
    //     type: Array,
    //     required: false
    // }
})

module.exports = Court = mongoose.model('court', CourtSchema);