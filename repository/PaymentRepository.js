const payment = require('../models/Payment');

async function getAllPayment(){
    //console.log("GetAllPayment",data);
    try{
        const result = await payment.find({}).then(res=> {return res});
        console.log("Result to get All Payment",result);
        if(result){
            var obj={
                message:"Get All details",
                isSuccess:true,
                data:result
            }
            return obj;
        }
        else{
            return{
                message:"No Payment details found",
                isSuccess:false,
                data:[]
            }
        }
        // var obj={
        //     "paymentID":"1",
        //     "price":"200"
        // }
        // return obj;
    }
    catch(err){
        console.log("Error",err);
    }
}



async function addPayment(data){
    console.log("addPayment",data);
    try{
        const newPayment = new payment({
            paymentID:data.paymentID,
            price:data.price
        })
        const result = await newPayment.save().then(res=>{return res});
        console.log("Result",result);
        var obj={
            "message":"Saved Successfully",
            "isSuccess":true,
            data:{
                "paymentID":result.paymentID,
                "price":result.price
            }
        }
        return obj;
    }
    catch(err){
        console.log("Error",err);
    }
}

async function updatePayment(data){
    console.log("updatePayment",data);
    try{
        const resultAfterUpdate = await payment.findOneAndUpdate({paymentID:data.paymentID},{price:data.price},{new:true}).then(res=> {return res});
        console.log("resultAfterUpdate",resultAfterUpdate);
        var obj={
            "message":"Updated Successfully",
            "isSuccess":true,
            data:{
                "paymentID":resultAfterUpdate.paymentID,
                "price":resultAfterUpdate.price
            }
        }
        return obj;
    }
    catch(err){
        console.log("Error",err);
    }
}

async function deletePayment(data){
    console.log("deletePayment",data);
    try{
        const resultAfterUpdate = await payment.findOneAndDelete({paymentID:data.paymentID}).then(res=> {return res});

        console.log("Result",resultAfterUpdate);
        var obj={
            "message":"Deleted Successfully",
            "isSuccess":true,
            data:{
                "paymentID":resultAfterUpdate.paymentID,
                "price":resultAfterUpdate.price
            }
        }
        return obj;
    }
    catch(err){
        console.log("Error",err);
    }
}

module.exports={
    getAllPayment,
    addPayment,
    updatePayment,
    deletePayment
}