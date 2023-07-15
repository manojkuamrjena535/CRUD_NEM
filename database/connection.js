require ('dotenv').config();
// const {builtinModules} = require('module');
const mongoose = require('mongoose');
// var mongo = require('mongodb');

// const db_url = process.env.DB_URL;

const connect = function(){
    mongoose.connect('mongodb://127.0.0.1/crud_n_e_m').then((val)=>{
        console.log('Database Connected');
    }).catch((err)=>{
        console.log(`${err}Error on connecting to the Database`);
    });
}


module.exports=connect; //exporting connection for use in other files