const request = require('request')

const url = 'https://jsonplaceholder.typicode.com/users/1'

// request({ url: url}, (error, response) => {
//         console.log(response);
        
// })

request(url , (error,response) => {
    const data = JSON.parse(response.body)
    console.log(data);
    console.log("CITY : -", data.address.city);
})



