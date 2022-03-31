let numberInput = document.getElementById("numberInput");
let result = document.getElementById("number");

function getNumber()
{
    result = numberInput.value;

    if(result % 7 == 0)
    {
        console.log("Divisible");
    } else 
    {
        console.log("Not Divisible");
    }
}