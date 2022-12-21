var express = require("express");
const {google} = require('googleapis');
var app=express();
var calauth=require('./services/CalendarAuth.js');
var calservice=require('./services/CalendarServices.js');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/",(req,res)=>{
    res.send("Hi there!");
});

app.get("/login",async (req,res)=>{
    client=await calauth.login();
    res.send(client);
});

app.get("/events",async (req,res)=> {
    events=await calauth.authorize().then(calservice.listEvents).catch(console.error)
    res.send(events);
});

app.post("/events", async (req,res)=>{  
    Addedevent= await calservice.createEvents(req.body).catch((err)=>res.sendStatus(422));
    // console.log("Addedevent :", Addedevent);
    res.send(Addedevent);
});



app.listen(3000,()=>{
    console.log("Server is running");
});

