//  IN db.JS WE WROTE A FUNCTION THAT WILL CONNECT US TO THE DATABASE thats it

const mongoose=require ("mongoose");
const mongoURI="mongodb+srv://prashant:hello12345@cluster0.aabiz.mongodb.net/Inotebook?retryWrites=true&w=majority"
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