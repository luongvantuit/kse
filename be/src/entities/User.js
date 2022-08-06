const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        minLength: 6,
    },
    fullname: {
        type: String,
        default: '',
    },
    role: {
        type: String,
        default: 'staff',
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    // tokens: [{
    //     token:{
    //         type: String,
    //         required: true
    //     }
    // }]
    },
);

userSchema.pre('save', async function (next) {
    try {
        const user = this;
        if (user.isModified('password') || user.isNew) {
            const salt = await bcrypt.genSalt(8);
            const hashedPassword = await bcrypt.hash(user.password, salt);
            user.password = hashedPassword;
        }
            next()
    } catch (error) {
        console.log(error);
    }
})

userSchema.methods.generateAuthToken = function () {
    const user = this;
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);
    return token
}

userSchema.statics.findByCredentials = async (username, password) => {
    const user = await User.findOne({ username: username });
    if (!user) {
        console.log('not found username');
        throw new Error({ error: 'Invalid email and password' });
    }
    console.log(password, user.password);
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        console.log('password mismatch');
        throw new Error({ error: 'Invalid email and password' });
    }
    return user
}

const User = mongoose.model('User', userSchema);

module.exports = User;
