const port = process.env.port || 3000;
const cors=require('cors');
const express= require('express');
const connect = require('./database/connection');
const routes = require('./routes/route');

connect();
const app = express();
app.use(express.json());

app.use('/api',routes);
app.use(cors());

app.listen(port,()=>{
    console.log(`app is runing on port ${port}`);
});