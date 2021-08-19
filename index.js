var express = require('express');  
var {graphqlHTTP} = require('express-graphql');  
var { buildSchema } = require('graphql');

const schema = require('./schema');
// Construct a schema, using GraphQL schema language  
// var schema = buildSchema(`  
//   type Query {  
//     hello: String
//   }
// `);
// The root provides a resolver function for each API endpoint  
// var root = {  
//   hello: () => {  
//     return 'Hello world!';  
//   },  
// };
var app = express();  
app.use('/graphql', graphqlHTTP({  
  schema, 
  graphiql: true,  
}));
app.listen(4000);  
console.log('Running a GraphQL API server at http://localhost:4000/graphql');  