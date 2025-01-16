import mongoose, {model, Schema} from "mongoose";
mongoose.connect("mongodb+srv://samreenmj:smrn7700@cluster0.tueqa.mongodb.net/")

 const UserSchema = new Schema({
    username:{type:String,unique:true},
    password:String
 })

 export const UserModel = model("User",UserSchema);
