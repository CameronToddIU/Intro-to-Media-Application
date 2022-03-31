let numberDisplayer = document.getElementById("displayer");

function random()
{
    let number = Math.floor(Math.random()*10 +1);
    console.log(number);
    numberDisplayer.innerHTML = number;

}

