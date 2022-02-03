function setup()
{
    let cvs = createCanvas(800,600);
    cvs.id('mycanvas');
}

function draw()
{
    //sets background
    background(255);

    // sets noRed variable
    let noRed = removeRed( color(250, 200, 150) );

    //fills circle with varible color noRed
    fill(noRed);
    
    //draws circle
    circle(mouseX,mouseY,50);
    

}

//has argument color
function removeRed(color){

    //changes the red in RGB to 0
    color.setRed(0);

    //returns color
    return color

}
