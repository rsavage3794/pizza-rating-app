const mongoose = require('../db/connection');

const PizzaSchema = new mongoose.Schema(
    {
        restaurant: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            maxValue:{
                type: Number,
                max: 10.0
            },
            reqiured: true
        },
        notes: {
            type: String,
            required: false
        },
    },
    { timestamps: true }
);

const Pizza = mongoose.model('Pizza', PizzaSchema);

module.exports = Pizza;