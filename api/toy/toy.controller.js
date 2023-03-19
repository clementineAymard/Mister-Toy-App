const toyService = require('./toy.service.js')

const logger = require('../../services/logger.service')

async function getToys(req, res) {
  try {
    const filterBy = {
      name: req.query.filterBy.name,
      inStock: req.query.filterBy.inStock,
      order: req.query.sortBy.order
    }
    if (!req.query.filterBy.labels) filterBy.labels = []
    else filterBy.labels = req.query.filterBy.labels

    console.log('filterBy', filterBy)

    logger.debug('Getting Toys', filterBy)
    const toys = await toyService.query(filterBy)
    res.json(toys)
  } catch (err) {
    logger.error('Failed to get toys', err)
    res.status(500).send({ err: 'Failed to get toys' })
  }
}

async function getToyById(req, res) {
  try {
    const toyId = req.params.id
    console.log('TOY ID :', toyId)
    const toy = await toyService.getById(toyId)
    res.json(toy)
  } catch (err) {
    logger.error('Failed to get toy', err)
    res.status(500).send({ err: 'Failed to get toy' })
  }
}

async function addToy(req, res) {
  const { loggedinUser } = req

  try {
    const toy = req.body
    toy.owner = loggedinUser
    const addedToy = await toyService.add(toy)
    res.json(addedToy)
  } catch (err) {
    logger.error('Failed to add toy', err)
    res.status(500).send({ err: 'Failed to add toy' })
  }
}


async function updateToy(req, res) {
  try {
    const toy = req.body
    const updatedToy = await toyService.update(toy)
    res.json(updatedToy)
  } catch (err) {
    logger.error('Failed to update toy', err)
    res.status(500).send({ err: 'Failed to update toy' })

  }
}

async function removeToy(req, res) {
  try {
    const toyId = req.params.id
    await toyService.remove(toyId)
    res.send()
  } catch (err) {
    logger.error('Failed to remove toy', err)
    res.status(500).send({ err: 'Failed to remove toy' })
  }
}

async function addToyMsg(req, res) {
  const { loggedinUser } = req
  try {
    const toyId = req.params.id
    const msg = {
      txt: req.body.txt,
      by: loggedinUser
    }
    const savedMsg = await toyService.addToyMsg(toyId, msg)
    res.json(savedMsg)
  } catch (err) {
    logger.error('Failed to update toy', err)
    res.status(500).send({ err: 'Failed to update toy' })

  }
}

async function removeToyMsg(req, res) {
  const { loggedinUser } = req
  try {
    const toyId = req.params.id
    const { msgId } = req.params

    const removedId = await toyService.removeToyMsg(toyId, msgId)
    res.send(removedId)
  } catch (err) {
    logger.error('Failed to remove toy msg', err)
    res.status(500).send({ err: 'Failed to remove toy msg' })

  }
}

module.exports = {
  getToys,
  getToyById,
  addToy,
  updateToy,
  removeToy,
  addToyMsg,
  removeToyMsg
}



// app.get('/api/toy', (req, res) => {
//   const filterBy = {
//     name: req.query.filterBy.name,
//     inStock: req.query.filterBy.inStock,
//     order: req.query.sortBy.order
//   }
//   if (!req.query.filterBy.labels) filterBy.labels = []
//   else filterBy.labels = req.query.filterBy.labels

//   // console.log('filterBy', filterBy)

//   toyService
//     .query(filterBy)
//     .then(toys => {
//       res.status(201).send(toys)
//     })
//     .catch(err => {
//       console.log('Error in backend', err)
//       res.status(401).send('Failed to get toys')
//     })
// })

// app.get('/api/toy/:toyId', (req, res) => {
//   const { toyId } = req.params

//   toyService
//     .getById(toyId)
//     .then(toy => {
//       res.status(201).send(toy)
//     })
//     .catch(err => {
//       console.log('Backend had error: ', err)
//       res.status(401).send(`Failed to get toy with id: ${toyId}`)
//     })

// })

// app.delete('/api/toy/:toyId', (req, res) => {
//   const { toyId } = req.params
//   toyService
//     .remove(toyId)
//     .then(() => {
//       res.send('OK, deleted')
//     })
//     .catch((err) => {
//       console.log('Error:', err)
//       res.status(400).send('Cannot remove toy')
//     })
// })

// app.put('/api/toy', (req, res) => {
//   const { _id, name, inStock, labels, createdAt, imageUrl } = req.body
//   const toy = { _id, name, inStock, labels, createdAt, imageUrl }

//   toyService.save(toy)
//     .then(savedToy => {
//       res.status(201).send(savedToy)
//     })
//     .catch(err => {
//       console.log('Backend Error:', err)
//       res.status(401).send('Cannot update toy')
//     })
// })

// app.post('/api/toy', (req, res) => {
//   // console.log(req.body)
//   const { _id, name, price, inStock, labels, createdAt, imageUrl } = req.body
//   const toy = { _id, name, price, inStock, labels, createdAt, imageUrl }
//   // if (toy.inStock==='') toy.inStock = false
//   console.log(toy)
//   toyService
//     .save(toy)
//     .then(savedToy => {
//       res.status(201).send(savedToy)
//     })
//     .catch(err => {
//       console.log('Backend Error:', err)
//       res.status(401).send('Cannot create toy')
//     })
// })