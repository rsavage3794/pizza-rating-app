//imports
//Require express
const express = require('express')
//Use express to instantiate app
const app = express()
const cors = require('cors')
/* START ROUTE CONTROLLERS */
//Require Pizza model
const Pizza = require('./models/pizza-model.js')
const pizzaController = require('./controllers/pizza')
const ejsLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')

app.use(methodOverride('_method'))


app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Stretch goal API
// app.use('/api/pizza', pizzaController)

app.use(express.static (__dirname + '/public'))

app.use('/pizza', pizzaController)
// app.use(pizzaContoller)

/* END ROUTE CONTROLLERS */
//Create variable for port
const port = process.env.PORT || 5000;

//Run server
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});