// imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const port = process.env.PORT || 3000;
const app = express();

// middleware - JSON parsing
app.use(express.json());
app.use(cors()); // will accept request from any origin if we invoke like this
app.use(bodyParser.json());

// middleware - API routes
app.use('/', routes.route);

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));