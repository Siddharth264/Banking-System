const express = require('express');
require('dotenv').config()
const dbConnect = require('./config/dbConfig')
const userRoute = require('./routes/userRoute')
const errorHandler = require('./middlewares/errors')
dbConnect();


const app = express();



const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})

app.use(express.json());
app.use('/api/v1/user',userRoute)
app.use(errorHandler)