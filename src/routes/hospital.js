//levels
//central- 0
//states- 1
//hospitals- 2
//production centres- 3

const User=require('../models/user');
const express=require('express');
const passport = require('passport');
const authenticate=require('../middleware/authenticate');

const hospitalRouter=express.Router();

hospitalRouter.post('/uploadCases',authenticate.checkAuth,authenticate.ckeckLevel({level:2}),async(req,res)=>{
    try {
        req.user.mildCases=req.body.mildCases;
        req.user.seriousCases=req.body.seriousCases;
        console.log(req.user)
        await req.user.save()
        res.send(req.user)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})
hospitalRouter.get('/uploadCases',async(req,res)=>{
    res.render('uploadCases',{title:'upload cases'})
})

module.exports=hospitalRouter;