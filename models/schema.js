const mongoose = require('mongoose');

const Users = mongoose.model('Users',{
    
    nama: {
        type: String,
        required: true
    },
    asal: {
        type: String,
        required: true
    },
    umur: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required:false
    }
});

module.exports = { Users }