const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    number: String,
    supplierName: String,
    updated_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Order', OrderSchema);