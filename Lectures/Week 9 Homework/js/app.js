let word = document.getElementById("textInput");
let result = document.getElementById("text");

function getText()
{
    let outputText = word.value;

    result.innerHTML = "hello " + outputText;

}