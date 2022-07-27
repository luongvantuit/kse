const express = require("express");
const User = require("../entities/User")
const auth = require("../middlewares/auth")

const router = express.Router();

router.get('/', auth, async (req, res) =>{  
    try {
        const username = req.user.username;
        const user = await User.findOne({username: username});
        if(!user){
            throw new Error({
                error: true,
                msg: "User not found",
                success: false,
            })
        }
        res.status(200).send({user: user});
    } catch (error) {
        res.status(500).send({error: error.message});
    }
})

module.exports = router