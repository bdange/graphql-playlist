require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

// allow cross-origin requests
app.use(cors())

mongoose.connect(process.env.MONGOLAB_URI)
mongoose.connection.once('open', () => {
    console.log('connected to db')
})

app.use("/graphql", graphqlHTTP({
    schema, 
    graphiql: true
}))

app.listen(4000, () => {
    console.log("App listening for request on port 4000")
})