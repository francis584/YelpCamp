var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/",function(req,res){
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye",function(req,res){
   res.send("Goodbye!!!"); 
});

// "/dog" => "MEOW!"
app.get("/dog",function(req, res) {
    res.send("MEOW!!!");
});

// dynamic pages by address
app.get("/r/:subredditName",function(req, res) {
   var subreddit = req.params.subredditName;
   res.send("welcome to " + subreddit.toUpperCase() + " subreddit!"); 
});

//subdirectories by name, not by address
app.get("/r/:subredditName",function(req, res) {
   res.send("welcome to subreddit!"); 
});

app.get("/r/:subredditName/comments/:id/:title/",function(req, res) {
    res.send("welcome to subreddit comments!");
});

// error page
app.get("*",function(req,res){
    res.send("YOU ARE A START!!!");
});


// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server has started!!!");
});