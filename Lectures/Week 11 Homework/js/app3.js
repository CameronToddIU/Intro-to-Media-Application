let stringDisplayer = document.getElementById("displayer");
let userInput = document.getElementById("stringInput");


function getText()
{

    stringDisplayer = userInput.value;


        document.getElementById("displayer").innerHTML = stringDisplayer.replace(/#/g, "");
}
