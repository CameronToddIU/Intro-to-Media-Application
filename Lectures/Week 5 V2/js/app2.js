
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
    circle(mouseX + obj.offSetX,mouseY,obj.size);

    if(mouseIsPressed) 
{
    if(obj.offSetX >=0)
    {
    obj.offSetX -= 1;
    }
}

else {
    obj.offSetX += 1;
}


}

