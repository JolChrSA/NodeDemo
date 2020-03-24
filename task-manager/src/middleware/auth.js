const jwt = require('jsonwebtoken')
const User = require('../models/user')
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        // console.log(token);
        const decode = jwt.verify(token, 'thisismynewcourse')
        const user = await User.findById({ _id: decode._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({ error: 'Please Authenticate' })
    }

}

module.exports = auth;