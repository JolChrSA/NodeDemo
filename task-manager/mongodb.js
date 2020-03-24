// Create CRUD Create, Read, Update , Delete Operation 
// var ObjectID = require('mongodb').ObjectID;

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL,{useNewUrlParser: true},(error,client) => {
//     if (error) {
//         console.log('Unable to connect Mongo db');
//     }
//     const db = client.db(databaseName)

//     // db.collection('users').insertOne({  // INSERT ONE RECORD
//     //     name: 'Joliph',
//     //     age: 25
//     // },(error,result) =>{
//     //     if (error){
//     //         console.log('Unable to insert One');
//     //     }
//     //     console.log(result.ops);
        
//     // })

//     // db.collection('users').insertMany([ // INSERT MANY RECORDS
//     //     {
//     //         name: 'Rahul',
//     //         age: '26'
//     //     }, 
//     //     {
//     //         name: 'Milan',
//     //         age: 22
//     //     }
        
//     // ],(error,result) =>{
//     //         if (error){
//     //             console.log('Unable to insert Many');
//     //         }
//     //         console.log(result.ops);
//     //     })

//     // db.collection('users').findOne({name: 'Joliph'}, (error, user) => { //FIND ONE RECORD
//     //     if (error){
//     //         return console.log('Unable to find users');
//     //     }
//     //     console.log(user);
        
//     // })

//     // db.collection('users').find({age:22}).toArray(),(error,users) => {   //FIND MANY RECORDS
//     //     if (error){
//     //         return console.log('Unable to find users');
//     //     }
//     //     console.log(users);
//     // }

//     // var myquery = { name: "Joliph" }; // Using name
//     // var mynewQuery = {_id : ObjectID('5e72f22690e3570ad389d112')}; // Using Object Id
//     // var newvalues = { $set: {name: "Alpesh" } };
//     // db.collection('users').updateOne(mynewQuery,newvalues,(error,result) => { //UPDATE RECORD
//     //     if (error) throw error;
//     //     console.log("1 document updated");
//     // })

//     var mynewQuery = {_id : ObjectID('5e72f22690e3570ad389d112')}; // Using Object Id
//     db.collection('users').deleteOne(mynewQuery,(error, result) => { //DELETE RECORD
//         if (error) throw error;
//         console.log("1 document deleted");
//     })
// })