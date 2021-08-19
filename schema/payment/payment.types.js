const gql = require('graphql-tag')
const typeDefs = gql`
    type Payment{
        paymentID:String,
        price:String
    }
    type Query{
        getPayment(paymentID:String!):String,
        getAllPayment:String
    }
    type Mutation{
        addPayment(price:String):String
    }
`
module.exports = typeDefs