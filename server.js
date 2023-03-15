const express = require('express')
const cors = require('cors')

// const cookieParser = require('cookie-parser')
// const bodyParser = require('body-parser')

const app = express()
const toyService = require('./services/toy.service')

const port = process.env.PORT || 3030
const corsOptions = {
    origin: [
        'http://localhost:5173',
        'http://127.0.0.1:5173',
    ],
    credentials: true
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static('public'))
// app.use(cookieParser())
// app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Toy App listening on : http://localhost:${port}`)
})

app.get('/api/toy', (req, res) => {
    const filterBy = {
        name: req.query.filterBy.name,
        inStock: req.query.filterBy.inStock,
        order: req.query.sortBy.order
    }
    if (!req.query.filterBy.labels) filterBy.labels = []
    else filterBy.labels = req.query.filterBy.labels

    // console.log('filterBy', filterBy)

    toyService
        .query(filterBy)
        .then(toys => {
            res.status(201).send(toys)
        })
        .catch(err => {
            console.log('Error in backend', err)
            res.status(401).send('Failed to get toys')
        })
})

app.get('/api/toy/:toyId', (req, res) => {
    const { toyId } = req.params

    toyService
        .getById(toyId)
        .then(toy => {
            res.status(201).send(toy)
        })
        .catch(err => {
            console.log('Backend had error: ', err)
            res.status(401).send(`Failed to get toy with id: ${toyId}`)
        })

})

app.delete('/api/toy/:toyId', (req, res) => {
    const { toyId } = req.params
    toyService
        .remove(toyId)
        .then(() => {
            res.send('OK, deleted')
        })
        .catch((err) => {
            console.log('Error:', err)
            res.status(400).send('Cannot remove toy')
        })
})

app.put('/api/toy', (req, res) => {
    const { _id, name, inStock, labels, createdAt, imageUrl } = req.body
    const toy = { _id, name, inStock, labels, createdAt, imageUrl }

    toyService.save(toy)
        .then(savedToy => {
            res.status(201).send(savedToy)
        })
        .catch(err => {
            console.log('Backend Error:', err)
            res.status(401).send('Cannot update toy')
        })
})

app.post('/api/toy', (req, res) => {
    // console.log(req.body)
    const { _id, name, price, inStock, labels, createdAt, imageUrl } = req.body
    const toy = { _id, name, price, inStock, labels, createdAt, imageUrl }
    // if (toy.inStock==='') toy.inStock = false
    console.log(toy)
    toyService
        .save(toy)
        .then(savedToy => {
            res.status(201).send(savedToy)
        })
        .catch(err => {
            console.log('Backend Error:', err)
            res.status(401).send('Cannot create toy')
        })
})