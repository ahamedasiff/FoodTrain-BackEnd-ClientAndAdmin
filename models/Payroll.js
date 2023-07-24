import mongoose from "mongoose";


const PayrollSchema = new mongoose.Schema({
    employeeId: {
        type: String,
    },
    basicSalary: {
        type: String,
        // required: true,
    },
    mealAllowance: {
        type: String,
        // required: true, 
    },
    transportationAllowance: {
        type: String,
    },
    medicalAllowance: {
        type: String,
        // required: true,
    },
    retirementInsurance: {
        type: String,
        // required: true,
    },
    Tax: {
        type: String,
        // required: true,
    },
    EPF: {
        type: String,
        // required: true,
    },
    ETF: {
        type: String,
        // required: true,
    },
    // featured: {
    //     type: Boolean,
    //     default: false
    // },

    
})

export default mongoose.model("PayRoll", PayrollSchema)