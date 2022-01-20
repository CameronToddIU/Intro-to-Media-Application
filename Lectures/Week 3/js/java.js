let size = 10;
let check1 = 0;
let check2 = 0;
let check3 = 0;
let speed = 3;



function setup(){
    createCanvas(800,600);

}

function draw()
{
    // translate (random(100),random(100));
    background(255);
    fill (255,99,99);
    circle(150,150,50);
    ellipse(50, 50, 30, 30); // Outer white ellipse

    
    line(0,0, random(500), random(500));
    rect(100, 25, size, size);
    test();
    check1 = check1 + speed;

    circle(random(370,400),150,size);

    
    
}


function test(){
    size = size + speed;

    if (size < 10) {
        speed = speed*-1;
    }

    if(size > 150) {
        speed = speed*-1;

    }
    check3 = check3 + 1;

}

