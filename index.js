const { buildSchema } = require("graphql")
const express = require('express');
const { createHandler } = require("graphql-http/lib/use/express")

// express server
const app = express();
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(
    `
      type Query {
        hello: String
        name: String
      }
    `
)
 
// The rootValue provides a resolver function for each API endpoint
var rootValue = {
  hello() {
    return "Hello world!"
  },
  name() {
    return "Himanshu"
  }
}

// lets create a server and answer real time queries
app.use('/graphql', createHandler({
  schema: schema,
  rootValue: rootValue
}));

app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});