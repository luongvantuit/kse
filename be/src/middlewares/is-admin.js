const jwt = require('jsonwebtoken');
const User = require('../entities/User');

const auth = async(req, res, next) => {
        const token  = req.header('Authorization').replace('Bearer ','');
        if(!token){
            res.status(403).send({
                error: true,
                msg: "Unauthorized! Token Type Error or Token is Empty!",
                success: false,
            })
        }
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        try {
            const user = await User.findOne({ username: data.username});
            if(!user){
                res.status(403).send({
                    error: true,
                    msg: 'Not found user from token',
                    success: false,
                })
            }
            req.user = user;
            next();
        } catch (error) {
            res.status(401).send({error: 'Not authorized to access resource!'});
        }
}

module.exports = auth;