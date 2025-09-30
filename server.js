const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const usersRoute = require('./routers/usersRoute');
const itemsRoute = require('./routers/itemRoute');
const supplierRoute = require('./routers/supplierRoute');
const categoryRouter = require('./routers/categoryRoute');

const connectDB = require('./config/mongodb');
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/v2/users', usersRoute);
app.use('/api/v2/items', itemsRoute);
app.use('/api/v2/suppliers', supplierRoute);
app.use('/api/v2/categories', categoryRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});