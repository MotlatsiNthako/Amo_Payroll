require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open',(error)=> console.log('Connected to Database'))

app.use(express.json())

const loginRouter = require('./routes/login')
app.use('/login', loginRouter)

const CompanyRouter = require('./routes/company')
app.use('/company',CompanyRouter)


app.listen(3000, () => console.log('Server Started'))