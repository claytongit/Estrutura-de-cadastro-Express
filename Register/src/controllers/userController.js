const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({ email })

        if(!user){
            user = await User.create(req.body);   

            //password vai ser apagado na hora que o usuario for criado
            user.password = undefined;
            
            return res.json(user);
        }else {
            return res.status(400).send({ error: 'User exists' });
        }   

        
    }
};

