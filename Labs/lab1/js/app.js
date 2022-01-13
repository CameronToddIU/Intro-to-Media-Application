// function preload() {
//     // Ensure the .ttf or .otf font stored in the assets directory
//     // is loaded before setup() and draw() are called
//     font = loadFont('assets/monster/Montserrat-Black.ttf');
//   }

function setup() {
    createCanvas(800,600);
    // textFont(font);
    // textSize(30);
    // textAlign(CENTER, CENTER);
}

function draw() {

    circle(mouseX,mouseY,frameCount/10);
}