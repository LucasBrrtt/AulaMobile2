
const mongoose = require('mongoose');

const VeiculoSchema =  new mongoose.Schema({
    nome : String,
    motor : String,
    portas : Number,
    cor : String,
    combustivel : String,
    anoFabri : String,
    anoModelo : String,
    placa : String,


});

module.exports = mongoose.model('Veiculo', VeiculoSchema);