var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name:"Cloud's Rest",
        image:"https://images.unsplash.com/photo-1493708638467-241317300c83?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=",
        description:"blah blah blah!"
    },
    {
        name:"Granite Hill", 
        image:"http://photosforclass.com/download/5641024448",
        description:"This a huge granite hill, no bathrooms. No water. Beautiful granite!"
    },
    {
        name:"Granite Hill", 
        image:"https://images.unsplash.com/photo-1470246973918-29a93221c455?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=&bg=",
        description:"This is a huge picture!!!"
    }
]
 

function seedDB(){
    Campground.remove({}, function (err){
        if(err){
            console.log(err);
        } else{
            console.log("removed campgrounds!");
            // add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else{
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {text:"This place is great, but I wish there was internet",
                            author:"Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else{
                                    campground.comments.push(comment);
                                    campground.save();
                                }
                            });
                    }
                });
            });    
        }
        
    });    
}

module.exports = seedDB;