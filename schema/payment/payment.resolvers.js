const paymentService = require('../../service/PaymentService')
const resolvers = {
    Query:{
        getPayment:(root,args,context,info)=>{
            console.log("args",args.paymentID);
            // console.log("context",context);
            return paymentService.getPayment(args);
        },
        
        getAllPayment:(root,args,context,info)=>{
            return paymentService.getAllPayment(args);
        },
    },
    Mutation:{
        addPayment:(root,args,context,info)=>{
            return paymentService.addPayment(args);
        },
        updatePayment:(root,args,context,info)=>{
            return paymentService.updatePayment(args);
        },
        deletePayment:(root,args,context,info)=>{
            return paymentService.deletePayment(args);
        },
    }
}
module.exports = resolvers