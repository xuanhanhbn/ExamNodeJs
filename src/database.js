const server = process.env.MONGODB_URI;
const database = process.env.DB_NAME;
let mongoose = require("mongoose");

class Database{
    constructor() {
        this.__connect();
    }
    __connect(){
        mongoose.connect(`${server}/${database}`)
            .then(()=>{
                console.log("Connected database!");
            })
            .catch((err)=>{
                console.log(err);
            })

    }
}
module.exports = new Database();