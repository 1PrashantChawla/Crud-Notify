//  IN db.JS WE WROTE A FUNCTION THAT WILL CONNECT US TO THE DATABASE thats it

require('dotenv').config();
const mongoose=require ("mongoose");

const mongoURI=process.env.DB_URI;


const connectToMongo=async ()=>{
    try {
   mongoose.connect(mongoURI,()=>{

        
        console.log("connected to mongodb...!");
    })
    
} catch (error) {
    console.log("could not connect Reason: "+error);
    
}



}


module.exports=connectToMongo; 