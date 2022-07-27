const mongoose  = require("mongoose");
const bcrypt  = require("bcrypt");
const jwt = require("jsonwebtoken");
const contract = require("../entities/ContractInformation")
const person = require("../entities/PersonalInformation");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        minLength: 6
    },
    role: {
        type: Array,
        default: ['staff']
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    contractInfor: {
        type: contract.contractInformationShema,
        default: null,
    },
    personInfor: {
        type: person.personInformationShema,
        default: null,
    },
    tokens: [{
        token:{
            type: String,
            required: true
        }
    }]
});

userSchema.pre('save',async function(next) {
    const user = this;
    if(user.isModified('password')){
        const salt = await bcrypt.genSalt(8);
        user.password = await bcrypt.hash(user.password, salt);
    }
    // user.contractInfor = new contract.ContractInformation({
    //     name: 'hello', 
    //     startContract: new Date(),
    //     endContract: new Date(),
    //     contractTerm: "3 year"
    // });
    next()
})

userSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET_KEY);
    user.tokens = user.tokens.concat({token});
    await user.save()

    return token
}

userSchema.statics.findByCredentials = async (username, password) =>{
    const user = await User.findOne({ username });
    if(!user){
        throw new Error({ error: 'Invalid email and password'});
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch){
        throw new Error({error: 'Invalid email and password'});
    }
    return user
}

const User = mongoose.model('User', userSchema);

module.exports = User;
