import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // This will throw an error if the username is missing
        unique: true, // This will throw an error if the username already exists
    },
    email: {
        type: String,
        required: true, // This will throw an error if the email is missing
        unique: true, // This will throw an error if the email already exists
    },
    password: {
        type: String,
        required: true, // This will throw an error if the username is missing
    },
    avatar:{
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      },
}, { timestamps: true }); // This will add a createdAt and updatedAt field to the schema

const User = mongoose.model("User", userSchema);

export default User;