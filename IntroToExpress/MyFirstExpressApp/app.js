var express = require("express");
var app = express();

app.get("/",function(req,res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal",function(req,res) {
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "I hate human",
        goldfish: "..."
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    
    res.send("The " + animal + " say '" + sound + "'");
});

app.get("/repeat/:str/:num",function(req,res) {
    var times = Number(req.params.num);
    var text = " ";
    for (var i = 0; i < times; i++) {
        text+=" "+req.params.str;
    }
    res.send(text);
});

app.get("*",function(req, res) {
   res.send("Sorry, page not found... What are you doing with your life?"); 
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started!");
});