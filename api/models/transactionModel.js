const mongoose = require('mongoose');

const transactionSchema =  mongoose.Schema({
    sender:{
        type: String,
        required: true
    },
    reciever:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Transaction', transactionSchema);