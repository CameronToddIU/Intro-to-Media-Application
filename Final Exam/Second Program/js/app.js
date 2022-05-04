//div with number 1000 in it
//check for users mouse onClick
//then increase number in div by 5%
//change innerHTML to display new number

//gets the div in index.html
let div = document.getElementById("increaseMe");

//creates divNumber
let divNumber = 1000;

//function that is called from onClick in index.html
function numberIncrease()
{
    //divNumber is multiplied by 1.05
    divNumber = divNumber *1.05;

    //printes divNumber to console
    console.log(divNumber);

    //writes divNumber to div in index.html
    div.innerHTML = divNumber;

}


