const express = require('express');
const router = require('./routers/routers')
require('./db/connection')

const app = express();

app.use(express.json());
app.use('/',router,(req,res)=>{
    res.sendStatus(401);
});

app.listen(process.env.PORT || 3000,()=>{
    console.log("server started!")
})