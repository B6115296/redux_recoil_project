require('dotenv').config();
const express = require('express');
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const usersRoutes = require("./routes/userRoutes");


connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', usersRoutes);

app.use("/signin", require("./controller/login"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

