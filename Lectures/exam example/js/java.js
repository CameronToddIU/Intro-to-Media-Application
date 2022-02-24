let x = document.getElementById("number").value;

let arrayChange = [0,0,0];

function setup(){
    createCanvas(800,600);
    
}

function draw()
{
    background(255);
    color(arrayChange[0], arrayChange[1], arrayChange[2]);
    square(200,200,300);
    console.log(frameCount);
}

