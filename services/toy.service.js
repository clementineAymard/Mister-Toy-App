// const fs = require('fs')

// var gToys = require('../data/toys.json')

// module.exports = {
//     query,
//     getById,
//     remove,
//     save
// }

// const PAGE_SIZE = 3

// function query(filterBy) {
//     // if (filterBy.inStock === 'true') filterBy.inStock = true
//     // if (filterBy.inStock === 'false') filterBy.inStock = false
//     // console.log('filterBy:', filterBy)
//     // var toys = gToys

//     // if (filterBy.inStock !== 'all') {
//     //     toys = toys.filter(toy => {
//     //         if (toy.inStock === 'true') toy.inStock = true
//     //         if (toy.inStock === 'false') toy.inStock = false
//     //         // console.log('toy.inStock: ', toy.inStock)
//     //         // console.log('filterBy.inStock: ', filterBy.inStock)
//     //         return toy.inStock === filterBy.inStock
//     //     })
//     // }

//     // if (filterBy.name !== '') {
//     //     var regex = new RegExp(filterBy.name, 'i')
//     //     toys = toys.filter(toy => regex.test(toy.name))
//     // }
//     // if (filterBy.labels.length > 0)
//     //     toys = toys.filter(t => t.labels.some(label => filterBy.labels.includes(label)))

//     // console.log('filterBy.order:', filterBy.order)
//     // if (filterBy.order === 'priceDesc' || filterBy.order === 'priceAsc') {
//     //     console.log('sorting by price')
//     //     let dir = filterBy.order === 'priceAsc' ? 1 : -1
//     //     // console.log('dir:', dir);
//     //     toys = toys.sort((t1, t2) => (+t1.price - +t2.price) * dir)
//     // } else {
//     //     toys = toys.sort((t1, t2) => (t1.createdAt - t2.createdAt) * filterBy.order)
//     //     console.log('sorting by date')
//     // }

//     //    if (filter.page) {
//     //     const startIdx = filter.page * PAGE_SIZE
//     //     toys = toys.slice(startIdx, startIdx + PAGE_SIZE)
//     // }

//     // console.log('gToys:', gToys)
//     // console.log('toys:', toys)
//     return Promise.resolve(toys)
// }

// function getById(toyId) {
//     const toy = gToys.find(toy => toy._id === toyId)
//     if (!toy) return Promise.reject('Unknown toy')
//     return Promise.resolve(toy)
// }

// function remove(toyId) {
//     const idx = gToys.findIndex(toy => toy._id === toyId)
//     if (idx === -1) return Promise.reject('Unknown toy')

//     gToys.splice(idx, 1)
//     return _saveToysToFile()
// }

// function save(toy) {
//     if (toy._id) {
//         const idx = gToys.findIndex(currToy => currToy._id === toy._id)
//         if (idx === -1) return Promise.reject('Toy not found')
//         gToys.splice(idx, 1, toy)
//     } else {
//         toy._id = _makeId()
//         toy.createdAt = Date.now()
//         gToys.unshift(toy)
//     }
//     return _saveToysToFile()
//         .then(() => toy)
// }

// function _saveToysToFile() {
//     console.log('Hi from SAVE BUGS TO FILE')
//     return new Promise((resolve, reject) => {
//         const data = JSON.stringify(gToys, null, 2)

//         fs.writeFile('data/toys.json', data, (err) => {
//             if (err) return reject(err)
//             resolve()
//         })
//     })
// }

// function _makeId(length = 5) {
//     var txt = ''
//     var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     for (let i = 0; i < length; i++) {
//         txt += possible.charAt(Math.floor(Math.random() * possible.length))
//     }
//     return txt
// }