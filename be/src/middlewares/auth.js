const jwt = require('jsonwebtoken');
const User = require('../entities/User');

const auth = async(req, res, next) => {
        const token  = req.header('Authorization').replace('Bearer ','');
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        try {
            const user = await User.findOne({ _id: data._id});
            if(!user){
                res.status(404).json({
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