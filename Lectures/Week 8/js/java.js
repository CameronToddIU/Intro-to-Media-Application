let textInputHTML = document.getElementById("textInput");
let resultHTML = document.getElementById("result");
//gets html divs

function nameRepeater()
{
    //gets the value inside textbox and puts it in outputText
    let outputText = textInputHTML.value;

    //resets the div result to nothing
    resultHTML.innerHTML = "";
    
    //runs code 3 times
    for(i = 0; i<3; i++)
    {
        //puts the outputText into divwrite
        // let divWrite = `${outputText}`;

        //writes the result to HTML in result div
        resultHTML.innerHTML += outputText;
    }

    console.log(outputText);
}