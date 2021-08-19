const {makeExecutableSchema} =require ('graphql-tools');
const merge = require('lodash.merge');

const userSchema = require('./user');
const paymentSchema = require('./payment');
const schema = makeExecutableSchema({
    typeDefs:[
        userSchema.typeDefs,
        paymentSchema.typeDefs
    ],
    resolvers:merge(
        userSchema.resolvers,
        paymentSchema.resolvers
    )
})
module.exports = schema