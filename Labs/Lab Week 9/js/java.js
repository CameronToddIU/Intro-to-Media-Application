let inputHTML = document.getElementById("textInput");
let resultHTML = document.getElementById("result");
let resultHTML2 = document.getElementById("result2");
let resultHTML3 = document.getElementById("result3");

let removedVowles = "";
let newWord = "";

let test = "flapeinator";

function vowleRemover()
{
    let outputText = inputHTML.value;
    removedVowles = "";
    newWord = "";

    for(i = 0; i< outputText.length; i++)
    {
        console.log("startingLoop");
        if (outputText[i] == "a")
        {
            removedVowles += "a";
            console.log("Spot a");
            
        }
        else if (outputText[i] == "e")
        {
            removedVowles += "e";
            console.log("Spot e");
        }
        else if (outputText[i] == "i")
        {
            removedVowles += "i";
            console.log("Spot i");
        }        else if (outputText[i] == "o")
        {
            removedVowles += "o";
            console.log("Spot o");
        }        else if (outputText[i] == "u")
        {
            removedVowles += "u";
            console.log("Spot u");
        }
        else
        {
            newWord += outputText[i]
            console.log(i);
        }
        
    }

 
    resultHTML.innerHTML = outputText;
    resultHTML2.innerHTML = removedVowles;
    resultHTML3.innerHTML = newWord;
}