const express = require('express');
const {buildSchema} = require('graphql');
const {createHandler} = require('graphql-http/lib/use/express')

const schema = buildSchema(
    `
    type Query{
        addNum(a: Int!, b: Int!): Int!
    }
    `
)

const root = {
    addNum({a, b}){
        return a + b;
    }
}

const app = express();
app.use(
    '/graphql',
    createHandler({
        schema,
        rootValue: root
    })
)

app.listen(4000, () => {
    console.log('Running a GraphQL API server at http://localhost:4000/graphql');
  });
