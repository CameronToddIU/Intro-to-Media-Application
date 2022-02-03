function setup()
{
    let cvs = createCanvas(800,600);
    cvs.id('mycanvas');
}

function draw()
{
    // background(255);

    translate(100,100);
    let result = polarPoint(40);

    circle(result.x,result.y,10);
}

function polarPoint(r)
{
    //sets var x
    //multiples argument r, with sin and position of mouseX
    let x = r * Math.sin(mouseX);

    //multiples argument r, with cos and position of mouseX
    let y = r * Math.cos(mouseX);

    //returns
    return createVector(x,y);

}