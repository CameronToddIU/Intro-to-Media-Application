let numberInput = document.getElementById("numberInput");
let result = document.getElementById("number");
let change = document.getElementById("changer");


let array;
let nextNumber = 2;


function getNumber()
{
    result = numberInput.value;

    array = result.split(",");

    nextNumber = array[0];
    console.log(array);

    for (i = 1; i < 3; i++)
    {

        
        nextNumber += array[i];
        console.log(nextNumber);

        // array += result[nextNumber];
        // console.log(array);
        // nextNumber+=2;

    }

    if(nextNumber == 111)
    {
        change.innerHTML = "Winner!";
        console.log("Winner!");
    }else{
        change.innerHTML = "Loser!";
        console.log("Loser!");
    }

    
    // if(result % 7 == 0)
    // {
    //     console.log("Divisible");
    // } else 
    // {
    //     console.log("Not Divisible");
    // }
}