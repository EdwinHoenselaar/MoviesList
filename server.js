const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const  cors = require('cors')
 

const movies = require('./routes/api/movies')

const app = express()

app
  .use(cors())
  .use(bodyParser.json())
  .use('/api/movies', movies)

// DB config
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))