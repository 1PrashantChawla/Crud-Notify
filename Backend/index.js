// THIS INDEX.JS IS THE EXPRESS SERVER


const connectToMongo=require('./db')
const express = require('express')
var cors = require('cors')
connectToMongo();
const app = express()
const port = 8000;




// cors for accesing the backend api running on local host
app.use(cors())
//MIDDLEWARE so taht we can access body
app.use(express.json())

// we can write available routes like this below
// rather than using all the routes at one place we will be creating a seperate folder for the same




// AVAILABLE ROUTES
// -----AUTHENTIFICATION RELATED------
app.use('/api/auth',require('./routes/auth'))
// /------- USERNOTES-----
app.use('/api/userNotes',require('./routes/userNotes'))




app.listen(port, () => {
  console.log(`I-Notebook listening on port http://localhost:${port}`)})



