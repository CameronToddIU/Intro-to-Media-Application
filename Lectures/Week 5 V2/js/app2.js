
let obj = {
    x:40,
    y: 40,
    size: 50,
    offSetX: 0
}


function setup()
{
    let cvs = createCanvas(800,600);
    cvs.id('mycanvas');
}

function draw()
{
    background(255);
    //creats a circle that offsets from the mouse's x position
    circle(mouseX + obj.offSetX,mouseY,obj.size);

    if(mouseIsPressed) 
{
    //while mouse is pressed bring circle x position to 0
    if(obj.offSetX >=0)
    {
    obj.offSetX -= 1;
    }
}

else {
    //while mouse is not pressed increase circle x position
    obj.offSetX += 1;
}


}

