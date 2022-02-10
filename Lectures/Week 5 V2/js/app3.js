
//object properties for circle
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
    //calls circle check
    circleCheck();

}

function circleCheck(){

    //creates circle
    circle(obj.x+=obj.speedx,obj.y + obj.speedy,obj.size);

    //changes the x speed to a negative number once it reaches a border
    if (obj.x >=800)
    {
        //changes circle x speed to negative if it reaches canvas edge
        obj.speedx*=-1;
        console.log("change x speed");
    }
    if (obj.x <=0)
    {
        //changes circle x speed to positive if it reaches canvas edge
        obj.speedx*=-1;
        console.log("change x speed");
    }

    //changes the y speed to a negative number once it reaches a border
    if (obj.y >=600)
    {
        //changes circle y speed to negative if it reaches canvas edge
        obj.speedy*=-1;
        console.log("change y speed");
    }
    if (obj.y <=0)
    {
        //changes circle y speed to positive if it reaches canvas edge
        obj.speedy*=-1;
        console.log("change y speed");
    }
}
