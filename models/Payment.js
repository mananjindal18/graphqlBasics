const mongoose = require('mongoose');
const db_paymentSchema = mongoose.Schema({
    paymentID:String,
    price:String
});

module.exports = mongoose.model('db_payment',db_paymentSchema,'db_payment');