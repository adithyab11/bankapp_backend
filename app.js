const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const {bankmodel} = require("./models/bank")
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://Adithyab:8281041547@cluster0.uhvrb.mongodb.net/bankDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let bank=new bankmodel(input)
    bank.save()
   console.log(bank)
    res.json({"status":"success"})
   
})


app.listen(8081,()=>{
    console.log("server started")
})
