let words = document.getElementById("wordInput");
let badWords = document.getElementById("badWords");

// wordArray;


function getWords()
{
    naughtyWords = 0;
    array = words.value.split(" ");

    for (i=0; i <= array.length; i++)
    {
        console.log("Loop " +i);
        if(array[i] == "clear" || array[i] == "water"|| array[i] == "tires")
        {
            naughtyWords++;
            badWords.innerHTML = naughtyWords;
            console.log("Bad Words " +naughtyWords);
        }
    }

    if (naughtyWords > 0){
        badWords.innerHTML = "Uh Oh, you typed "+naughtyWords+" Bad Words. You bad boy";
    } else {
        badWords.innerHTML = "WOW! You typed "+naughtyWords+" Bad Words. Nice Job";
    }

    words.value = "";
}


