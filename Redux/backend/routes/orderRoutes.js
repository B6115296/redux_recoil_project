const express = require('express');
const router = express.Router();

const { getAllOrders, getOrderById, createOrder} = require('../controller/orderControllers');

//@desc GET all order from db
//@route GET /api/orders
//@access Public
router.get('/', getAllOrders);

//@desc GET a order by id from db
//@route GET /api/orders/:id
//@access Public
router.get('/:id', getOrderById);

//@desc POST a order by id from db
//@route POST /api/orders/
//@access Public
router.post('/', createOrder);

module.exports = router;