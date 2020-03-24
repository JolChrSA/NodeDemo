const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        lowercase : true,
        unique: true,
        trim: true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Invalid Email Id')
            }
        }
    },
    age: {
        type: Number,
        require:true,
        validate(value){
            if (value < 0){
                throw new Error('Age must be positive')
            }
        }
    },
    password: {
        type: String,
        require: true,
        minLength: 7,
        validate(value){
            if (value < 7){
                throw new Error('Password must be greter then 7 characters')
            }
        }
    },
    tokens: [{
        token:{
            type: String,
            require: true
        }
    }]
})
userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({_id: user._id.toString()},'thisismynewcourse')

    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

userSchema.statics.findByCredentails = async(email, password) => {
    const user = await User.findOne({email: email})

    if (!user) {
        throw new Error('Unable to Login')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw new Error('Unable to Login')
    }

    return user
}

//Use Hasing function for Password Encryption
userSchema.pre('save',async function (next) {
    const user = this
    console.log('Just before Saving');
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password,8)
    }
    
    next()
})


const User = mongoose.model('User',userSchema)

module.exports = User;