var express = require("express");

var bodyparser = require("body-parser");

var app= express();

app.use(bodyparser.json());

app.use(express.static(__dirname+"/../project"));

app.get("/",function (req,res){
    res.redirect("/index.html");
});

app.post("/api/login",function (req,res){
    var userDetails={uname:"admin",upwd:"admin"};
    if(req.body.u_name==userDetails.uname && req.body.u_pwd==userDetails.upwd){
        res.json({login:"success"});
    }else{
        res.json({login:"failure"});
    }
});

app.listen(188);
console.log("Server Listening the Port No.188");
