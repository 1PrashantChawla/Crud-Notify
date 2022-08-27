const mongoose=require('mongoose');


const {Schema}=mongoose;
const UserSchema=new Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
            default:Date.now
        },

    }
)

// mongoose.model('name Of model whichyou want to write',schema name)
const User=mongoose.model('user',UserSchema);
User.createIndexes();// this will create seperate indexes
module.exports=User;
// module.exports=mongoose.model('modelName',schema to be imported)
