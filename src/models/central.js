const mongoose=require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema= new mongoose.Schema({
    level:{
        type:Number,
        required:true,
        trim:true,
    },
    tokens:[{
        token:{
            type:String,
        }
    }]
},{
    timestamps:true
})
userSchema.plugin(passportLocalMongoose);
const User=mongoose.model('user',userSchema);
module.exports=User;