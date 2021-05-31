const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var dateTime;
var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles");
    //change the data in JSON format
    var responseJson = await response.json();
   console.log(responseJson);
    // write code slice the datetime
    var dateTime = responseJson.datetime;
    console.log(dateTime);
    var hour = dateTime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    console.log(hour);
    if(hour>=06&& hour<17){
        bg = "sunrise6.png";
    }
    else{
        bg = "sunset12.png";
    }
       backgroundImg = loadImage(bg);
    
    
    

    //load the image in backgroundImg variable here

}
