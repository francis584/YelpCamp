var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image:String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

/*Campground.create({
    name:"Granite Hill", 
    image:"http://photosforclass.com/download/5641024448",
    description:"This a huge granite hill, no bathrooms. No water. Beautiful granite!"
}, function (err, campground) {
    if(err){
        console.log(err);
    }else{
        console.log("NEWLY CAMPGROUND CREATED!");
        console.log(campground);
    }
}
);
*/
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");


app.get("/",function(req,res) {
    res.render("landing");
});

app.get("/campgrounds",function (req,res) {
   //Get all campgrounds from DB
   Campground.find({},function(err,allCampgrounds){
       if(err){
           console.log(err);
       }else{
           res.render("index",{campgrounds:allCampgrounds});
       }
   });
});

//CREATE - add new campground to DB
app.post("/campgrounds",function (req,res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image:image, description: desc};
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            // redirect back     to campgrounds page
            res.redirect("campgrounds"); 
        }
    });
    
});

//NEW - show a form to create a new campground
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
})

//SHOW - shows more info about one campground
app.get("/campgrounds/:id",function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id,function(err,foundCampground){
        if(err){
            console.log(err);
        }else{
            //render show template with that campground
            res.render("show",{campground:foundCampground});
    
        }
    })
    
});

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("The YelpCamp Server has started!");
});