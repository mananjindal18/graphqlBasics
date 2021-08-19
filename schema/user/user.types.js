const gql = require('graphql-tag')
const typeDefs = gql`
    type User{
        userId:String,
        mobile:String,
        email:String
    }
    type Query{
        getUser(mobile:String!):String,
        getAllUser(name:String!):String
    }
    type Mutation{
        addUser(mobile:String, email:String):String
    }
`
module.exports = typeDefs