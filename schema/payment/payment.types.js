const gql = require('graphql-tag')
const typeDefs = gql`
    type Payment{
        paymentID:String,
        price:String
    }
    type apiResponse{
        message:String,
        isSuccess:Boolean,
        data:Payment
    }
    type apiResponseArray{
        message:String,
        isSuccess:Boolean,
        data:[Payment]
    }
    type Query{
        getPayment(paymentID:String!):Payment,
        getAllPayment:apiResponseArray
    }
    type Mutation{
        addPayment(paymentID:String, price:String):apiResponse,
        updatePayment(paymentID:String,price:String):apiResponse,
        deletePayment(paymentID:String):apiResponse
    }
`
module.exports = typeDefs