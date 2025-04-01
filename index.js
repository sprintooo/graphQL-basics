var { graphql, buildSchema } = require("graphql")
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)
 
// The rootValue provides a resolver function for each API endpoint
var rootValue = {
  hello() {
    return "Hello world!"
  }
}
 
// Run the GraphQL query '{ hello }' and print out the response
const query = "{ hello }"
graphql({
  schema: schema,
  source: query,
  rootValue: rootValue
}).then(response => {
  console.log(response)
})