const mongoose=require('mongoose');
const connect=mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
connect.then((db)=>{
    console.log('database is connected correctly to server!');
}).catch((err)=>{
    console.log(err)
})
