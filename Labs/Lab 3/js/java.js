let posx = 50;
let posy = 50;
var word = "";
var mouse1;
var mouse2;

function setup(){
    createCanvas(400,400);
}

//called functions to move text
posxChange();
posyChange();
wordChange();

//draws the canvas every frame
function draw(){

    //background is redrawn white every frame
    background(255);

    text(word, posx, posy);

    //calls circleChange function
    circleChange();

    //draws circle
    //mouse 1 and mouse 2 are influenced by circleChange()
    circle(mouse1,mouse2,50);

}

function posxChange(){
    //changes posx by 50px everytime function is called
    posx = posx + 50;
    console.log(posx);
}

function posyChange(){
    //changes posy by 100px everytime function is called
    posy = posy + 100;
    console.log(posy);
}

function wordChange(){
    //adds a "d" everytime the function is called
    word+="d";
    console.log("changed");
}

function circleChange(){
    //get mouse coords
    //subtract 400 by the coords
    //put the number in variable
    //put variable in draw circle
    mouse1 = 400 - mouseX;
    mouse2 = 400 - mouseY
}

