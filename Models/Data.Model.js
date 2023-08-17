const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    name : String,
    email : String,
    destination : String,
    noofTravellers: Number,
    budgetPerPerson:Number
});


const DataModel = mongoose.model("trip",dataSchema);

module.exports = DataModel;