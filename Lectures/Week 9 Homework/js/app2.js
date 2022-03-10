let word = document.getElementById("textInput");
let result = document.getElementById("result");
let result2 = document.getElementById("result2");

let total = 0;

function getText()
{
    let outputText = word.value;

    let tax = outputText * .07;

    outputText = parseFloat(outputText);

    total = outputText + tax;

    result.innerHTML = outputText;

    result2.innerHTML = tax;

    result3.innerHTML = total





}
