const paymentRepository = require('../repository/PaymentRepository');

function getPayment(data){
    var Payment = {
        paymentID:"1234",
        price:"12"
    }
    return Payment ;
}
function getAllPayment(){
    var result = paymentRepository.getAllPayment();
    return result;
}
function addPayment(data){
    var result = paymentRepository.addPayment(data);
    return result;
}
function updatePayment(data){
    var result = paymentRepository.updatePayment(data);
    return result;
}
function deletePayment(data){
    var result = paymentRepository.deletePayment(data);
    return result;
}
module.exports={
    getPayment,
    getAllPayment,
    addPayment,
    updatePayment,
    deletePayment
};