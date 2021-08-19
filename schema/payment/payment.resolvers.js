const paymentService = require('../../service/PaymentService')
const resolvers = {
    Query:{
        getPayment:(root,args,context,info)=>{
            return paymentService.getPayment(args);
        },
        
        getAllPayment:(root,args,context,info)=>{
            return paymentService.getAllPayment(args);
        },
    },
    Mutation:{
        addPayment:(root,args,context,info)=>{
            return paymentService.addPayment(args);
        }
    }
}
module.exports = resolvers