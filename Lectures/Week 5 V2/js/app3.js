let obj = {
    x:0,
    y:0,
    size: 50,
     posx: 1,
     posy: 300,
     speedy: 5,
     speedx: 5
}

function setup()
{
    let cvs = createCanvas(800,600);
    cvs.id('mycanvas');
}

function draw()
{
    background(255);
    fill('black');
    circleCheck();

}

function circleCheck(){

    
    circle(obj.x+=obj.speedx,obj.y + obj.speedy,obj.size);

    //changes the x speed to a negative number once it reaches a border
    if (obj.x >=800)
    {
        obj.speedx*=-1;
        console.log("change x speed");
    }
    if (obj.x <=0)
    {
        obj.speedx*=-1;
        console.log("change x speed");
    }

    //changes the y speed to a negative number once it reaches a border
    if (obj.y >=600)
    {
        obj.speedy*=-1;
        console.log("change y speed");
    }
    if (obj.y <=0)
    {
        obj.speedy*=-1;
        console.log("change y speed");
    }
}
