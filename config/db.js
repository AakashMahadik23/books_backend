
const mongoose = require('mongoose');
const config = require('config');
const db = config.get("MONGODB_URI");

const connectDB = async () => {
    try{
        mongoose.set('strictQuery', true);
        await mongoose.connect(db, {
            useNewUrlParser: true,
        });

        console.log("Mongo is connected");
    } catch(err){
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
