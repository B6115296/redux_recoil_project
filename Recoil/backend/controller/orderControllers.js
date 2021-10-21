const Order = require('../models/Order');

const getAllOrders = async (req, res) => {
    try{
        const orders = await Order.find({});

        res.json(orders);
    } catch (error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const getOrderById = async (req, res) => {
    try{
        const orders = await Order.findById(req.params.id);

        res.json(orders);
    } catch (error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const createOrder = async (req, res, next) => {
    const { userId, products, amount, address} = req.body;
    try{
        const order = await Order.create({
            userId,
            products,
            amount,
            address,
        })

        res.json(order, 200, res)
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder
}