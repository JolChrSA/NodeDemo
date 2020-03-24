const fetch = require("node-fetch");

// const greeting =(name = 'Joliph') => {
//     console.log('Hello ', name);
    
// }

// greeting()
// greeting('Pasi')


fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => {
    response.json().then((data) => {

        if(data.error) {
            console.log('Error found');
        }else {
            console.log(data);
            
        }

    })
})