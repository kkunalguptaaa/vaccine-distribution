const mongoose=require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const hospitalSchema= new mongoose.Schema({
    owner:{
        type: mongoose.Types.ObjectId,
        ref: "state"
    },
    seriousCases:{
        type:Number,
    },
    mildCases:{
        type:Number,
    },
    tokens:[{
        token:{
            type:String,
        }
    }]
},{
    timestamps:true
})
hospitalSchema.plugin(passportLocalMongoose);
const  Hospital=mongoose.model(' hospital', hospitalSchema);
module.exports= Hospital;