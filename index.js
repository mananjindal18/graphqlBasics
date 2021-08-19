var express = require('express');  
var {graphqlHTTP} = require('express-graphql');  
var { buildSchema } = require('graphql');

const mongoose = require('mongoose');
const cors = require("cors");
const schema = require('./schema');
const expressPlayground = require("graphql-playground-middleware-express")
  .default;
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
app.use(cors());
app.use('/graphql', graphqlHTTP({  
  schema, 
  graphiql: true,  
}));
app.listen(4000);  
console.log('Running a GraphQL API server at http://localhost:4000/graphql');  
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

//mongoose.connect('mongodb+srv://graphql:graphql@graphql.2tzr2.mongodb.net/graphQLLearning?retryWrites=true&w=majority',{
mongoose.connect('mongodb+srv://graphql:graphql@cluster0.1exqh.mongodb.net/graphQLLearning?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify:false
})
.then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log(err));