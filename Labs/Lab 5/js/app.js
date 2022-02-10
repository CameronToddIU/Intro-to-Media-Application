let tvOff = true;
let colorChange = 0;
let obj = {
    x: 200,
    y: 300,
    width: 400,
    height: 200,
    radius: 20,
    color: "gray"
}

let screen = {
    x: 215,
    y: 310,
    width: 370,
    height: 180,
    radius: 0
}
function setup()
{
    let cvs = createCanvas(800,600);
    cvs.id('mycanvas');
    

    
}

function draw()
{
    //outside of tv
    fill(obj.color);
    drawTV(obj);

    // inside of tv
    fill(colorChange,255,255);
    drawScreen(screen);
    
    
}

function mouseClicked()
{
    if(tvOff == true)
    {
        tvOff = false;
        colorChange = 255;
        console.log(tvOff);
    }

    else
    {
        tvOff = true;
        colorChange = 0;
        console.log(tvOff);
    }
}

function drawTV(obj)
{
    rect(obj.x, obj.y, obj.width, obj.height, obj.radius);
    
}

function drawScreen(screen)
{
    rect(screen.x, screen.y, screen.width, screen.height, screen.radius);
}