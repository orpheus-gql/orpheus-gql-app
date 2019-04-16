const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const NetworkConstructor = require('./orpheus/ping');
const orpheusGQL = require('./orpheus')
const orpheusContext = require('./orpheus/context');
const orpheusExtension = require('./orpheus/extension');
require('dotenv').config();
const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true })

mongoose.connection.once('open', () => {
  console.log('connected to database');
})


// when someone goes to below route, express will look and see that you want to interact with graphQL. the control of this request will be hand-offed to the middleware. (graphqlHTTP)
// need a schema to be created and passed into middleware function; to describe how the data on our graph will look
app.use('/graphql', graphqlHTTP(request => {
  return {
    schema,
    context: orpheusContext(),
    graphiql: true, // set this to be true so we can use graphiql on our local host
    extensions: orpheusExtension
  }
}));

app.get('/orpheus', orpheusGQL);

app.listen(3500, () => {
  console.log('now listening for requests on port 3500')
});
