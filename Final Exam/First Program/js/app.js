//check length of array
//have loop go through each word in div -1
//print the words the loop goes through into div

//gets the wordContainer in index.html
changeDiv = document.getElementById("wordContainer");

//array of words
let words = [ "cheese", "crackers", "wine", "knife", "velocipedes"];

//loop that goes through each word in array, except for last one
for(i = 0; i< words.length-1; i++)
{
    //prints word to console
    console.log(words[i]);

    //write words to div
    changeDiv.innerHTML += words[i]+"<br>";

}