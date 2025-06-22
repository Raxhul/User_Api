import { Schema , model } from "mongoose";
 // create a schema with a variable
const schema = new Schema({
  //structure with data type
  name: {
    type:String,
    require: true,
    unique:true,
  },
  email: {
    type:String,
    require: true,
    unique:true,
  
  },
});

// then save it in a module in a variable
const User = model("user", schema);

export default User;
