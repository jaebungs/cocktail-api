const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cocktailsSchema = new Schema({
    name: String,
    ingredients: [String],
    Instruction: String,
    garnish: String
})

const Cocktail = mongoose.model('Cocktail', cocktailsSchema);

module.exports = Cocktail;