import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    phone: {
        type: String
    },
    message: {
        type: String
    },
})

export default mongoose.model("ContactUs", ContactSchema)