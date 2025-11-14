const cors = require('cors');
require('dotenv').config();
const express = require('express')
const router = require('./routes/router')
const errorHandler = require('./middlewares/errorHandler')
require('./config/dbConnect')
const app = express()
const port = 3000
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

app.use('/auth-yash', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors(
    {
        origin : true,
        credentials : true
    }
));

app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
app.use('/media',express.static(path.join(__dirname, 'media')));
app.use('/api',router)
app.use(errorHandler)


app.listen(port)