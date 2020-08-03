const mongoose=require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const stateSchema= new mongoose.Schema({
    owner:{
        type: mongoose.Types.ObjectId,
        ref: "central"
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
stateSchema.plugin(passportLocalMongoose);
const State=mongoose.model('state',stateSchema);
module.exports=State;