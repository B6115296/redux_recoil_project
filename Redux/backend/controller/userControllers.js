const Users = require('../models/Users');


const getAllUsers = async (req, res) => {
    try{
        const users = await Users.find({});

        res.json(users);
    } catch (error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const getUserById = async (req, res) => {
    try{
        const users = await Users.findById(req.params.id);

        res.json(users);
    } catch (error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const createUsers = async (req, res, next) => {
    const { name, email, password, birthday, address, phone} = req.body;
    try{
        const user = await Users.create({
            name,
            email,
            password,
            birthday,
            address,
            phone
        })

        res.json(user, 200, res)
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUsers
}