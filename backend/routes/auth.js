const express = require('express');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');


const JWT_SECRET = 'Vyshuisenergiticgirl';
//Route 1 : create a user using: post  "/api/auth/createuser"  . no login required

router.post('/createuser',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid Email').isEmail(),
    body('password','Enter valid password').isLength({min:5})
],async (req,res)=>{
    // if there are errors, return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    try{
    // check whether the user with this email  exists already
    let user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error:"Sorry a user with this email already exists"})
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);
    user =  await User.create({
        name:req.body.name,
        password:secPass,
        email:req.body.email,
    });
const data ={
    user:{
        id:user.id
    }
}
    const authtoken = jwt.sign(data,JWT_SECRET);
    
    // res.json(user)
    res.json({authtoken})
}catch(error){
    console.error(error.message);
    res.status(500).send("internal server error")
}})
//Route : 2 authenticate a user using: post  "/api/auth/login"  . no login required

router.post('/login',[
    body('email','Enter a valid Email').isEmail(),
    body('password','Password cannot be blank').exists(),
],async (req,res)=>{
// if there are errors, return bad request and errors
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: result.array() });
}
const {email,password} = req.body;
try{
    let user = await User.findOne({email});
    if(!user){
        return res.status(400).json({error:"Please try to login with correct credentials"});
 
    }

    const passwordCompare = await bcrypt.compare(password,user.password);
    if(!passwordCompare){
        return res.status(400).json({error:"Please try to login with correct credentials"});
    }

    const data = {
        user:{
            id:user.id
        }
    }
    const authtoken = jwt.sign(data,JWT_SECRET);
    res.json({authtoken})
}catch(error){
    console.error(error.message);
    res.status(500).send("internal server error")
}
  }  );
//Route : 3 get logged in user details using : post "/api/auth/getuser".login required
router.post('/getuser',fetchuser,async (req,res)=>{
try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
} catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
}})
module.exports = router