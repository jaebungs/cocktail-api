const express = require('express');
const { v4: uuidv4 } = require('uuid');
let Cocktail = require('../models/cocktails');

const router = express.Router();

// routes in this file starting with /cocktails
router.get('/', (req, res) => {
    Cocktail.find()
    .then((cocktails)=> res.json(cocktails))
    .then((err)=> res.status(400).json(`Error: ${err}`))
})

router.get('/:id', (req, res) => {
    Cocktail.findById(req.params.id)
    .then((cocktail)=> {
        console.log(cocktail)
        res.json(cocktail)
    })
    .then((err)=> res.status(400).json(`Error: ${err}`))
})

router.delete('/:id', (req, res) => {
    Cocktail.findByIdAndDelete(req.params.id)
    .then((cocktail)=> {
        console.log('Deleted' )
    })
    .then((err)=> res.status(400).json(`Error: ${err}`))
})


router.post('/', (req, res)=>{
    const recipe = {...req.body };
    const newCocktail = new Cocktail({...recipe});
    console.log(newCocktail)
    try {
        newCocktail.save()
        .then(()=>res.json('Cocktail Added!'))
        .catch(err=>res.status(400).json(`Error: ${err}`))
    } catch (err) {
        res.status(500).json(`Error: ${err}`)
        console.log(err)
    }
})

module.exports = router;