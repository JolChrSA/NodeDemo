const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const userRouter = require('./routers/user')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)

// app.post('/users',(req,res) => { // Without async-await 
//     const user = new User(req.body)
//     user.save().then(() => {
//         res.send(user)
//     }).catch((error) =>{
//         res.status(400).send(error)
//     })
// })

// app.post('/users', async (req,res) => { //With async-await 

//     const user = new User(req.body)
//     try {
//             await user.save()
//             res.status(201).send(user)
       
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

// // app.get('/users',(req,res) => {  // Without async-await 
// //     User.find({}).then((users) => {
// //         res.send(users)
// //     }).catch((e)=>{
// //         res.status(500).send()
// //     })
// // })

// app.get('/users',async (req,res) => { //With async-await

//     try {
//         const user = await User.find({})
//         res.send(user)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// // app.get('/users/:id', (req,res) => { // Without async-await 
// //     const _id = req.params.id
// //     User.findById(_id).then((user) => {
// //           if(!user)  {
// //             res.status(404).send()    
// //           }
// //           res.send(user)
// //     }).catch((error) => {
// //         res.status(500).send()
// //     })
// // })

// app.get('/users/:id', async (req,res) => { // // With async-await 

//     const _id = req.params.id
//     try {
//         const user = await User.findById(_id)
//         if (!user){
//             res.status(400).send()
//         }
//         res.send(user)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// app.patch('/users/:id', async (req,res) => {

//     const updates = Object.keys(req.body);
//     const allowUpdate = ['name','age','email','password']
//     const isValidOperation = updates.every((update)=> allowUpdate.includes(update))

//     if (!isValidOperation) {
//         res.status(400).send({error : 'Invalid Updates!'})
//     }
//     try {
//         const user = await User.findByIdAndUpdate(req.params.id,req.body,{new: true, runValidators: true})
//         if (!user){
//             res.status(404).send()
//         }
//         res.send(user)
//     } catch (error) {
//         res.status(404).send(error)
//     }
// })

// app.delete('/users/:id', async(req,res) => {

//     try {
//         const user = await User.findByIdAndDelete(req.params.id)

//         if (!user){
//             res.status(404).send({error: 'User not found'})
//         }
//         res.send(user)
//     } catch (error) {
//         res.status(501).send(error)
//     }
// })

app.listen(PORT,() => {
    console.log(`Server listing on Port ${PORT}`);
})