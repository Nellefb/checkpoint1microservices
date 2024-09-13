const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const scheme = new Schema ({
    nome : {
        type : String,
        required : true
    },
    telefone : {
        type : Number,
        required : true
    },
    cnpj : {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model('Cliente', scheme)