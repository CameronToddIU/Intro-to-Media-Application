// let text = document.getElementById("text");
// let count = 0;
// let txt = "mc";

// text.style.height = "100px"
// text.style.width = "100px"
// text.innerHTML = txt;

// function changeText(){
//     count++
// if(count == 3)
// {
//     text.innerHTML = "";
//     text.innerHTML = "divdivdiv";
// }
// }



let el = document.createElement("div");
let text = "mc"
el.style.backgroundColor = "#32a852"
el.innerHTML = text;

el.onclick = function () {
text = text + "div"
el.innerHTML = text;


}

document.body.appendChild(el);