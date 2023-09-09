const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const book  = require('./routes/api/books');

const app = express();




app.use(cors())
app.use(bodyParser.json());
// routes 

app.use('/api/books',book)

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

//Connect db
connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log("Port Listening")

});
