const Pizza = require('../models/pizza-model')
const seedData = require('./pizza-seeds.json')

Pizza.deleteMany({})
    .then(() => {
        return Pizza.insertMany(seedData);
    })
    .then(console.log) 
    .catch(console.error)
    // => {
    //     return Pizza.create(
    //         {restaurant: 'Pizza Planet', city: 'Toy', state: 'Story', rating: 0.6}
    //     )
    // })
    // .then((pizza) => {
    //     console.log(pizza)
    //     return Pizza.insertMany(pizza)
    // })
    // .then(console.log)
    // .catch(console.error)
    .finally(() => {
        process.exit()
    })