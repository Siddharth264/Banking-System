const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    amount:{
        type: Number,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)