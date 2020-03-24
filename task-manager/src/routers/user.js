const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/users', async (req,res) => { //With async-await 

    const user = new User(req.body)
    try {
            await user.save()
            const token = await user.generateAuthToken()
            res.status(201).send({user,token})
       
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/users/login', async (req,res) => {
    try {
        const user = await User.findByCredentails(req.body.email,req.body.password)
        const token = await user.generateAuthToken()
        res.send({user,token})
    } catch (error) {
        res.status(400).send({error: 'Email or Password are Incorrect'})
    }
})



router.post('/users/logout', auth , async (req,res) => {

    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send({msg: 'Logout Succefully !!'})
    } catch (error) {
         res.status(501).send()   
    }
})

router.post('/users/logoutAll', auth , async (req,res) => {

    try {
        req.user.tokens = []
        await req.user.save()

        res.send({msg: 'Logout Succefully !!'})
    } catch (error) {
         res.status(501).send()   
    }
})

// app.get('/users',(req,res) => {  // Without async-await 
//     User.find({}).then((users) => {
//         res.send(users)
//     }).catch((e)=>{
//         res.status(500).send()
//     })
// })

router.get('/users',auth,async (req,res) => { //With async-await

    try {
        const user = await User.find({})
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

// app.get('/users/:id', (req,res) => { // Without async-await 
//     const _id = req.params.id
//     User.findById(_id).then((user) => {
//           if(!user)  {
//             res.status(404).send()    
//           }
//           res.send(user)
//     }).catch((error) => {
//         res.status(500).send()
//     })
// })

router.get('/users/:id', async (req,res) => { // // With async-await 

    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if (!user){
            res.status(400).send()
        }
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/usersMe/myProfile', auth , async (req,res) => {
    res.send(req.user)
})

router.patch('/users/:id', async (req,res) => { // Without Authentication

    const updates = Object.keys(req.body);
    const allowUpdate = ['name','age','email','password']
    const isValidOperation = updates.every((update)=> allowUpdate.includes(update))

    if (!isValidOperation) {
        res.status(400).send({error : 'Invalid Updates!'})
    }
    try {
        const user = await User.findById(req.params.id)
        updates.forEach((update)=> {
            user[update] = req.body[update]
        })

        await user.save()
        // const user = await User.findByIdAndUpdate(req.params.id,req.body,{new: true, runValidators: true}) Without Using Middleware
        if (!user){
            res.status(404).send()
        }
        res.send(user)
    } catch (error) {
        res.status(404).send(error)
    }
})


router.patch('/usersMe/me',auth ,async (req,res) => { // With Authentication

    const updates = Object.keys(req.body);
    const allowUpdate = ['name','age','email','password']
    const isValidOperation = updates.every((update)=> allowUpdate.includes(update))

    if (!isValidOperation) {
        res.status(400).send({error : 'Invalid Updates!'})
    }
    try {
        updates.forEach((update)=> {
            req.user[update] = req.body[update]
        })
        await req.user.save()
        res.send(req.user)
    } catch (error) {
        res.status(404).send(error)
    }
})

router.delete('/users/:id', async(req,res) => { // Without Authentication

    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user){
            res.status(404).send({error: 'User not found'})
        }
        res.send(user)
    } catch (error) {
        res.status(501).send(error)
    }
})

router.delete('/usersDel/me',auth, async(req,res) => { // With Authentication

    try {
         await req.user.remove()
        res.send(req.user)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;