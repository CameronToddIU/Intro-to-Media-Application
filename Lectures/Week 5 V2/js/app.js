let obj = {
    x:40,
    y:40,
    width: 200,
    height: 200,
    radius: 10
}

function setup()
{
    let cvs = createCanvas(800,600);
    cvs.id('mycanvas');
    

    
}

function draw()
{
    //calls drawsRectangle
    drawRectangle(obj);
}

function drawRectangle(obj)
{
    //creates a rectangle based on what is fed into it.
    rect(obj.x,obj.y,obj.width,obj.height,obj.radius);
}

