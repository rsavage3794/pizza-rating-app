const express = require('express');
const router = express.Router();

//Require Pizza model
const Pizza = require('../models/pizza-model.js')

//routes
router.get('/', (req, res) => {
    Pizza.find({})
        .then(pizza => {
            // res.send(pizza)
            res.render('home', { pizza })
        })
        .catch(console.error)
});

//new route

router.get('/new', (req, res) => {
    res.render('new')
});

router.post('/', (req, res) => {
    Pizza.create(req.body)
    .then((pizza) => {
            res.redirect('/pizza')
        })
        .catch(console.error)
})

// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
    const routeId = req.params.id;
    Pizza.findById(routeId)
    .then((pizza) => {
        res.render('edit', {pizza});
    })
    .catch(console.error)
})

// UPDATE ROUTE
router.put('/:id', (req, res) => {
    const id = req.params.id;
    Pizza.findOneAndUpdate(
        { _id: id },
        {
            restaurant: req.body.restaurant,
            city: req.body.city,
            state: req.body.state,
            rating: req.body.rating,
            notes: req.body.notes,
            complete: req.body.complete === 'on',
        },
        { new: true }
        )
        .then((pizza) => {
            res.json('show', pizza);
        })
    .catch(console.error);
});

// DELETE ROUTE
router.delete('/:id', (req, res) => {
    const id = req.params.id
    Pizza.findOneAndDelete(
        {_id: id},
    )
    .then(result => {
        res.redirect('/pizza')
    })
})

//DIFFERENT STATE ROUTES
router.get('/connecticut', (req, res) => {
    // res.send("You made it to Connecticut")
    Pizza.find({state: "Connecticut"})
    .then((pizzas, error) => res.render('ct', {pizzas}))
})

router.get('/newjersey', (req, res) => {
    // res.send("Welcome to New Jersey")
    Pizza.find({state: "New Jersey"})
    .then((pizzas, error) => res.render('nj', {pizzas}))
})

router.get('/newyork', (req, res) => {
    // res.send("The Big Apple")
    Pizza.find({state: "New York"})
    .then((pizzas, error) => res.render('ny', {pizzas}))
})

router.get('/pennsylvania', (req, res) => {
    // res.send("We are...")
    Pizza.find({state: "Pennsylvania"})
    .then((pizzas, error) => res.render('pa', {pizzas}))
})

router.get('/:id', (req, res) => {
    const routeId = req.params.id
    // res.render('index')
    console.log(routeId);
    Pizza.findById({_id:routeId})
    .then((pizza) => {
        console.log(pizza)
        res.render('show', {pizza})
    })
    .catch(err => {
        console.log(`error during lookup of id: ${routeId}`)
        res.send(`no luck; try again`)
    })
})
module.exports = router