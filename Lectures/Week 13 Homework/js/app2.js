let box = document.getElementById("box");
let currentColor = document.getElementById("currentColorBox");




let R = 0;
let G = 0;
let B = 0;

currentColor.innerHTML = "Current rgb(" + R + "," + G + "," + B +")";

box.style.backgroundColor = "rgb(" + R + "," + G + "," + B +")";

function addColor(event)
{


    let color = event.target.getAttribute("data-color");
    let colorIncrease = event.target.getAttribute("data-increase");
    colorIncrease = parseInt(colorIncrease);

    if (R >= 255)
    {
        R = 255;
    } 
     if (G >= 255)
    {
        G = 255;
    } 
     if (B >= 255)
    {
        B = 255;
    }

    if(color == "red")
    {
        R += colorIncrease;
        box.style.backgroundColor = "rgb(" + R + "," + G + "," + B +")";
        console.log("R " +R);
    } else if (color == "green"){
        G += colorIncrease;
        box.style.backgroundColor = "rgb(" + R + "," + G + "," + B +")";
        console.log("G " + G);
    } else {
        B += colorIncrease;
        box.style.backgroundColor = "rgb(" + R + "," + G + "," + B +")";
        console.log("B " + B);

    }

    currentColor.innerHTML = "Current rgb(" + R + "," + G + "," + B +")";

    console.log("R " + R+ " ,G "+ G + " ,B "+ B);
}


