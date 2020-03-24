const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
}) 



// const me = new User({  // Add Data to DB
//     name: 'Joliph',
//     age: 25
// })

// me.save().then(() =>{
//     console.log(me);
    
// }).catch((error)=> {
//     console.log(error);    
// })


