const mongoose = require(`mongoose`);

const BakerySchema = mongoose.Schema(
    {
        title: String,
        price: Number,
        description: String,
    },
    {timestamp: true},

);

const Bakery = mongoose.model('product', BakerySchema);

module.exports = Bakery;