const User = require('../models/user');

exports.createUser = async (req, res) =>{
    try {
        const {name, password, email } = req.body;
        if(!name || !password || !email) {
            return res.status(400).json({message : "name password email are require"})
        }
        const user = new User({
            name,
            password,
            email
        });
        await user.save();
       res.status(201).json({message : "User Created"})

        
    } catch (error) {
        res.status(500).json({message:"something went wrong",error:error.message})
    }
}

exports.getAllUser = async (req, res) => {
    try {
        const user = await User.find();
        if(user.length <= 0){
            return res.status(404).json({message : "User not found"})
        }

        res.status(200).json({ user });
        
    } catch (error) {
        res.status(500).json({message:"something went wrong",error:error.message})
    }
}

exports.upadateUser = async (req, res) =>{
    try {
        const { id } = req.params;
        const {name, password, email } = req.body;
        
        const user = await User.findByIdAndUpdate(id, {
            name,
            password,
            email
        });


       res.status(201).json({message : "User Updated"},{ user })

        
    } catch (error) {
        res.status(500).json({message:"something went wrong",error:error.message})
    }
}



