
let squareDiv = document.getElementById("square");
let size = 100;

squareDiv.style.height = size+"px";
squareDiv.style.width = size+"px";
squareDiv.style.backgroundColor = "green";

function Increase()
{
    size = size*1.1;
    squareDiv.style.height = size+"px";
    squareDiv.style.width = size+"px";
}