const mongoose=require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const productionSchema= new mongoose.Schema({
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
productionSchema.plugin(passportLocalMongoose);
const  Production=mongoose.model(' production', productionSchema);
module.exports= Production;