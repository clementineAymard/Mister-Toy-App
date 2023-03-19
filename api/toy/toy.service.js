const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const utilService = require('../../services/util.service')
const { ObjectId } = require('mongodb')

async function query(filterBy) { // ={txt:''}
    console.log('filterBy:', filterBy)

    if (filterBy.inStock === 'true') filterBy.inStock = true
    if (filterBy.inStock === 'false') filterBy.inStock = false
    console.log('filterBy:', filterBy)

    const filterCriteria = {}
    try {
        if (filterBy.name !== '')
            filterCriteria.name = { $regex: filterBy.name, $options: 'i' }

        if (filterBy.inStock !== 'all') {
            filterCriteria.inStock = filterBy.inStock // { inStock: filterBy.inStock }
        }

        if (filterBy.labels.length > 0)
            filterCriteria.labels = { $in: filterBy.labels }

        const sortCriteria = {}
            if (filterBy.order === 'priceDesc' || filterBy.order === 'priceAsc') {
                console.log('sorting by price')
                let dir = filterBy.order === 'priceAsc' ? 1 : -1  // console.log('dir:', dir);
                sortCriteria.price = dir
            } else {
                console.log('sorting by date')
                sortCriteria.createdAt = parseInt(filterBy.order)
            }

        console.log('filterCriteria: ', filterCriteria)
        console.log('sortCriteria: ', sortCriteria)

        const collection = await dbService.getCollection('toy')
        var toys = await collection.find(filterCriteria).sort(sortCriteria).toArray() // for paging use : .limit()
        return toys
    } catch (err) {
        logger.error('cannot find toys', err)
        throw err
    }
}

async function getById(toyId) {
    try {
        const collection = await dbService.getCollection('toy')
        const toy = collection.findOne({ _id: new ObjectId(toyId) })
        return toy
    } catch (err) {
        logger.error(`while finding toy ${toyId}`, err)
        throw err
    }
}

async function remove(toyId) {
    try {
        const collection = await dbService.getCollection('toy')
        await collection.deleteOne({ _id: new ObjectId(toyId) })
    } catch (err) {
        logger.error(`cannot remove toy ${toyId}`, err)
        throw err
    }
}

async function add(toy) {
    try {
        const collection = await dbService.getCollection('toy')
        await collection.insertOne(toy)
        return toy
    } catch (err) {
        logger.error('cannot insert toy', err)
        throw err
    }
}

async function update(toy) {
    try {
        const toyToSave = {
            vendor: toy.vendor,
            price: toy.price
        }
        const collection = await dbService.getCollection('toy')
        await collection.updateOne({ _id: new ObjectId(toy._id) }, { $set: toyToSave })
        return toy
    } catch (err) {
        logger.error(`cannot update toy ${toyId}`, err)
        throw err
    }
}

async function addToyMsg(toyId, msg) {
    try {
        msg.id = utilService.makeId()
        const collection = await dbService.getCollection('toy')
        await collection.updateOne({ _id: new ObjectId(toyId) }, { $push: { msgs: msg } })
        return msg
    } catch (err) {
        logger.error(`cannot add toy msg ${toyId}`, err)
        throw err
    }
}

async function removeToyMsg(toyId, msgId) {
    try {
        const collection = await dbService.getCollection('toy')
        await collection.updateOne({ _id: new ObjectId(toyId) }, { $pull: { msgs: { id: msgId } } })
        return msgId
    } catch (err) {
        logger.error(`cannot add toy msg ${toyId}`, err)
        throw err
    }
}

module.exports = {
    remove,
    query,
    getById,
    add,
    update,
    addToyMsg,
    removeToyMsg
}
