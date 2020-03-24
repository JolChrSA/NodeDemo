const fs = require('fs')

// const book = {
//     title: 'Spider',
//     author: 'Joliph Christian'
// }

// const myJson = JSON.stringify(book)
// console.log(myJson);

// fs.writeFileSync('1-json',myJson)
// const pasreData = JSON.parse(myJson)
// console.log(pasreData.title);

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Rahul Pasi"
data.address = "U.P"

const userJson = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJson)
console.log(data.name);
