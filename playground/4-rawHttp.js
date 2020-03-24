
const https = require('https')

const url = "https://jsonplaceholder.typicode.com/users/1"

const request = https.request(url,(response) => {

    let data = ''

    response.on('data',(chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', ()=> {
        const body = JSON.parse(data)
        console.log(body);
        
    })

    response.on('error', (error) => {
        console.log('An error', error);
    })
})

request.end()