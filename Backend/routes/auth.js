const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
var fetchUser=require('../middleware/fetchUser')
const { body, validationResult } = require('express-validator');

const JWT_SECRET = 'PrashantIsHappy'


// ROUTE1:CREATE USER ENDPOINT
// create a user using POST endpoint "/api/auth/createUser"   DOESN'T REQUIRE AUTHENTICATION
router.post('/createUser', [
  // adding express validation
  body('email', "Enter a valid email").isEmail(),
  body('name', "Enter a valid name").isLength({ min: 3 }),
  body('password', "Password must be at least 5 characters").isLength({ min: 5 }),


], async (req, res) => {



  const errors = validationResult(req);
  // if Error return bad request and errors 
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  // adding everything in try catch so that we can find where the error is
  try {


    //check wheather the user with the email already exist
    let user = await User.findOne({ email: req.body.email })
    if (user) {
      // if user is there then this message will be displayed
      return res.status(400).json({ error: "Sorry the user with this email already exists" },)
    }




    

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      //else  we will create a new user if a unique email is entered
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email
      })


      const data = {
        user: {
          id: user.id
        }

      }

      // Signing JWT
      const authtoken = jwt.sign(data, JWT_SECRET);
     
    


    res.json({authtoken});

    // res.json(user);

  }
  catch (error) {
    console.error(error.message)
    res.status(500).send("Internal Server Error !")
  }




})


//ROUTE2: LOGIN END POINT
// / Authenticate a User using POST endpoint "api/auth/login"   

router.post('/login', [
  // adding express validation
  body('email', "Enter a valid email").isEmail(),
  body('password', "Password cannot be blank").exists(),
],async(req,res)=>{


  const errors = validationResult(req);
  // if Error return bad request and errors 
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

const {email,password}=req.body;
try{
  let user =await User.findOne({email})
  // if email doesn't match throw error
   if(!user){
    return res.status(400).json({error:"Enter The Correct Credentials !"})
   }
   const passwordCompare=await bcrypt.compare(password,user.password)
  //  IF PASSWORD DOESN'T MATCH THEN DISPLAY BELOW MESSAGE
   if (!passwordCompare) {
    return res.status(400).json({error:"Enter The Correct Credentials !"})
    
   }
   const payload={
user:{
  id:user.id
}

   }

   const authtoken=jwt.sign(payload,JWT_SECRET);
   res.json({authtoken})




}
catch(error){
  console.error(error.message);
  res.status(500).send("Internal Server Error !");

}


})




// ROUTE 3: creating GET USER route
// GET LOGGED in user details using :POST /api/auth/getuser       .LOGIN required
// here we will provide JWT token and fetch all the details of the user.

router.get('/getUser', fetchUser,async(req,res)=>{


try{
  userId=req.user.id;
  const user =await User.findById(userId).select("-password")
res.send(user)
}

  catch(error){
console.log(error.message);
res.status(500).send("internal server error!")
  }
}
)


module.exports = router; 
