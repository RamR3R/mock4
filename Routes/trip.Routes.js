const express = require("express");
const DataModel = require("../Models/Data.Model");
const tripRouter = express.Router();


tripRouter.get("/",(req,res)=>{
    console.log("Trip router hited");
    res.send("Trip router");
});

tripRouter.get("/retrive",async(req,res)=>{
    try{
        let q = {}
        let sort = "asc"
        if(req.query)
        {
            if(req.query.filter)
            q.destination = req.query.filter;
            else
            q = {};
            
            if(req.query.sort)
            sort = req.query.sort;

            console.log(q,sort);
        }
        console.log(req.query);
        const data = await DataModel.find(q).sort({budgetPerPerson : sort});
        // console.log(data);
        res.status(200).json({message: " Data Retrived",data:data});
    }
    catch(err){
        console.log(err.message);
    }
})

tripRouter.post("/post",async(req,res)=>{
    try{
        console.log(req.body);
        const data = new DataModel({...req.body});
        await data.save();

        console.log(data);
        res.status(200).json({message: " Data Posted",data:data});
    }
    catch(err){
        console.log(err.message);
    }
})

tripRouter.delete("/delete/:id",async(req,res)=>{
    try{
        let id = req.params.id;
        const data = await DataModel.findByIdAndDelete(id)
        console.log(data);
        res.status(200).json({message: "Post Deleted",data:data});
    }
    catch(err){
        console.log(err.message);
    }
})


module.exports = tripRouter;