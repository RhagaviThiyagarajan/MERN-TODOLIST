const mongoose=require('mongoose');
const connect=async()=>{
    try{
        await mongoose.connect(
            process.env.MONGO_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('MongoDB Connected🎈')
    }
    catch(e)
    {
        console.log(e.message,'Error in connecting to db');
    }
};



mongoose.connection.on('disconnected',()=>{
    console.log('mongodb is disconnected')
});


module.exports=connect;