function setup()
{
    let cvs = createCanvas(800,600);
    cvs.id('mycanvas');
    

    
}

function draw()
{
    //draws background
    background(255);

    //the function test is given mouseX and mouseY for the arguments
    test(mouseX,mouseY);
}

//function test has arguments x and y
function test(x,y){
    //the circles is drawn wherever the arguements x and y are. which is the mouse coordinates
    circle(x,y,100);
    circle(x-20,y-20,10);
    circle(x+20,y-20,10);

    // draws an arc wherever x and y are. then that arc is shortend by starting the arc at 0, then stopping at pi. which is half of a circle.
    arc(x, y+10, 50, 40, 0, PI);
    //gives the arc a no fill
    noFill();
}