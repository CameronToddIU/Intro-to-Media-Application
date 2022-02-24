//array to print
let print = [];

//what will go to array
let number = 0;


    for(i=0; i<5; i++)
    {
        //number is given 1000
        number = number + 1000;
        //number is pushed into array
        print.push(number);
        console.log(number);
        //array is printed in HTML
        document.getElementById("myLoop").innerHTML = print;
    }
    console.log("Finished");