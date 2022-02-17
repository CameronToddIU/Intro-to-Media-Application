let squareDiv = document.getElementById("square");
let size = 100;



squareDiv.style.height = size+"px";
squareDiv.style.width = size+"px";
squareDiv.style.backgroundColor = "blue";

squareDiv.onmouseover = function(){
    squareDiv.style.backgroundColor = "black";
}

squareDiv.onmouseout = function() {
    squareDiv.style.backgroundColor = "blue";
}
