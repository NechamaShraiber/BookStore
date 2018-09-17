const mongoose = require("mongoose");
const {seedMongoDb}=require('./seeders/seeder');
let url="mongodb://test:test@cluster0-shard-00-00-cgdrt.mongodb.net:27017,cluster0-shard-00-01-cgdrt.mongodb.net:27017,cluster0-shard-00-02-cgdrt.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
// Connect to MongoDB: 
mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
        console.log("We're connected to MongoDB.");
        seedMongoDb();
    })
    .catch((e) => { console.log("We're not connected to MongoDB.", e); });


module.exports={
    mongoose
}

