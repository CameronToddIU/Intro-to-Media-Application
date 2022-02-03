function setup(){
    createCanvas(800,600);
}

//draws the canvas every frame
function draw(){

    //background is redrawn white every frame so that there is only 1 circle
    background(255);

    //fill is the color the circle will make
    fill (255,99,99);

    //circle follows mouse on the x and y axis, and changes in size dependant on the size variable
    circle(mouseX,mouseY,50);

}