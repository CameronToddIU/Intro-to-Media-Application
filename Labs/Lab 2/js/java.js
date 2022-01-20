let size = 10;

function setup(){
    createCanvas(800,600);
}

//draws the canvas every frame
function draw(){

    //background is redrawn white every frame so that there is only 1 circle
    background(255);

    //fill is the color the circle will make
    fill (255,99,99);

    //circle follows mouse on the x and y axis, and changes in size dependant on the size variable
    circle(mouseX,mouseY,size);

    //when size is greater than 50px, it will set the size to 50px
    if(size >50)
    {
        size = 50;
    }


}

//function event called whenever the mouse is clicked
function mouseClicked()
{

    //if the size of the circle is less than 50, it will increase in size
    if(size < 50)
    {
        size = size+10;
    } 
}