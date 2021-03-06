var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgrounds = [
       {name:"Salmon Creek", image:"http://photosforclass.com/download/7626464792"},
       {name:"Granite Hill", image:"http://photosforclass.com/download/5641024448"},
       {name:"Mountain Goat's Rest", image:"http://photosforclass.com/download/14435096036"},
       {name:"Salmon Creek", image:"http://photosforclass.com/download/7626464792"},
       {name:"Granite Hill", image:"http://photosforclass.com/download/5641024448"},
       {name:"Mountain Goat's Rest", image:"http://photosforclass.com/download/14435096036"},
       {name:"Salmon Creek", image:"http://photosforclass.com/download/7626464792"},
       {name:"Granite Hill", image:"http://photosforclass.com/download/5641024448"},
       {name:"Mountain Goat's Rest", image:"http://photosforclass.com/download/14435096036"},
       
    ]

app.get("/",function(req,res) {
    res.render("landing");
});

app.get("/campgrounds",function (req,res) {
   
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds",function (req,res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image:image};
    campgrounds.push(newCampground);
    // redirect back     to campgrounds page
    res.redirect("/campgrounds"); 
    
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
})

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("The YelpCamp Server has started!");
});