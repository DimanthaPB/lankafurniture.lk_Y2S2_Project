const mongoose = require("mongoose");

const dburl = "mongodb+srv://admin:RtA0WXYBc6yBRUvA@cluster0.jsnvxmd.mongodb.net/";

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connection = async () =>{
    try{
        await mongoose.connect(dburl);
        console.log("MongoDb Connected~");
    }catch (e) {
        console.error(e.message);
        process.exit();
    }
};

module.exports = connection;