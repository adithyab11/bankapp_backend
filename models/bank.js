const mongoose=require("mongoose")
const Schema=mongoose.Schema({
    "name":String,
    "dob":String,
    "mobileNo":String,
    "bankname":String,
    "accNo":String,
    "acctype":String,
    "balance":String
    
})
let bankmodel=mongoose.model("banks",Schema);
module.exports={bankmodel}