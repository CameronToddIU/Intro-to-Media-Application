// var count = 0;
var movex = 0;
var speedx = 5;
var speedy= 5;
var posx = 1;
var posy = 300;
var sizeChange = 1;

function setup(){
    createCanvas(800,600);

}

function draw()
{
    //background is redrawn white every frame
    background(255);
    // count++;
    // console.log(count);

    //moves the circle 5px to the right every frame
    fill('black');
    circle(movex+=5,300,50);

    //cricle check function
    circleCheck();

    //
    circle(mouseX,mouseY,50);

    fill('yellow');
    circle(posx+=speedx,posy+=speedy,50);

    fill('green');
    circle(400,300,sizeChange++);
    
    
}

function circleCheck(){
    if(mouseX <= 400)
    {
        fill('blue');
    }
    else{
        fill('red');
    }
    if (movex >= 800){
        movex = 0;

    }

    //changes the x speed to a negative number once it reaches a border
    if (posx >=800)
    {
        speedx*=-1;
        console.log("change x speed");
    }
    if (posx <=0)
    {
        speedx*=-1;
        console.log("change x speed");
    }

    //changes the y speed to a negative number once it reaches a border
    if (posy >=600)
    {
        speedy*=-1;
        console.log("change y speed");
    }
    if (posy <=0)
    {
        speedy*=-1;
        console.log("change y speed");
    }

    if(sizeChange >=200)
    {
        sizeChange = 1;
    }
}


