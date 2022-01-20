let size = 10;
let check1 = 0;
let check2 = 0;
let check3 = 0;
let speed = 3;

function setup(){
    createCanvas(800,600);
    // strokeWeight(3);
}

function draw(){
    background(255);
    fill (255,99,99);
    circle(150,150,size);
    test();
    check1 = check1 + speed;



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
    console.log(size);

}