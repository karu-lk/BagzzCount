const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    updated_date: { type: Date, default: Date.now }
})

module.exports=mongoose.model('Supplier', SupplierSchema);