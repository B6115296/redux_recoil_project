require('dotenv').config();

const productData = require('./data/products');
const userData = require('./data/users');
const orderData = require('./data/orders');
const connectDB = require('./config/db');
const Product = require('./models/Product');
const Order = require('./models/Order');
const User = require('./models/Users');
connectDB();

const importData = async () => {
    try{
        await Product.deleteMany({});

        await Product.insertMany(productData);

        await Order.deleteMany({});

        await Order.insertMany(orderData);

        await User.deleteMany({});

        await User.insertMany(userData);

        console.log("Data Import Success");

        process.exit();
    } catch (error) {
        console.error("Error with data import");
        process.exit(1);
    }
};

importData();