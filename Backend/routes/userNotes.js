const express=require('express'); 
const router=express.Router();
const Note = require('../models/Note')
var fetchUser=require('../middleware/fetchUser')
const { body, validationResult } = require('express-validator');


 
// ROUTE 1: GET ALL THE NOTES using get request api/userNotes/fetAllNotes :LOgin Required
router.get('/fetchAllNotes',fetchUser,async (req,res)=>{

try {

   const notes = await Note.find({user:req.user.id});
   res.json(notes)
} 
catch (error) {
   console.error(error.message)
    res.status(500).send("Internal Server Error !")
}
   

})




// ROUTE 2: Add notes using Post request api/userNotes/addNote Login Required.
router.post('/addNote', fetchUser,[
   // adding express validation
   body('title', "Enter a valid Title").isLength({ min: 3 }),
   body('description', "Enter a valid Description,Description must be at least 5 characters").isLength({ min: 5 }),
  
 
 
 ], async (req, res) => {
 try {
   
 
const{title,description,tag}=req.body;

   const errors = validationResult(req);
   // if Error return bad request and errors 
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }

   // else  add note
   const note=new Note({
      title,description,tag,user: req.user.id

   })
   // saving the note

   const savedNote =await note.save()
   res.json(savedNote)
} catch (error) {
   console.error(error.message)
    res.status(500).send("Internal Server Error !")
   
}
   
})






// Route:3 update an existing note /api/userNotes/updateNote LOgin Required
// / For update we use PUT request.
router.put("/updateNote/:id",fetchUser,async(req,res)=>{
   const {title,description,tag}=req.body;
   // craete a newNote object
   const newNote={}
   // if the the title is coming in the request then update it
   if(title){newNote.title=title};
   if(description){newNote.description=description};
   if(tag){newNote.tag=tag};

try {
   

   // Find the note to be updated
   let note= await Note.findById(req.params.id)  // since note will be updated we assigned ,let to it instead of const
   // if 
   if (!note) {
    return  res.status(404).send("Note not Found")
      
   }

   // when someone else is trying to access someone's note
  
   if(note.user.toString()!==req.user.id)
   return res.status(401).send("You are not allowed")
   
   note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
   res.json({note});
} catch (error) {
   console.error(error.message)
}
})




// Route:4 Delete an  note /api/userNotes/deleteNote    Login Required
// / For delete we use delete request.
router.delete ("/deleteNote/:id",fetchUser,async(req,res)=>{
   
 try {
   
 
   // Find the note to be deleted and delete it
   let note= await Note.findById(req.params.id)  
   // if not found
   if (!note) {
    return  res.status(404).send("Note not Found")
      
   }

   // when someone  is trying to access someone's note
    // Allow deletion only to the owner
   if(note.user.toString()!==req.user.id)
   return res.status(401).send("You are not allowed")
   


// delete the note 
   note=await Note.findByIdAndDelete(req.params.id)
   res.json({"note":note,"Success" :"Note has been deleted !"});
 }catch (error) {
   console.error(error.message);
   res.status(500).send("Internal Server Error !");
}

})



module.exports=router;