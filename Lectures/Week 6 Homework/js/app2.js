//array to print
let print = [];

//what will go to array
let number = 0;


    for(i=0; i<25; i++)
    {
        number = number + 1;
        console.log(number);
        //checks if the current number is divisible by 5 and 3
         if (number % 5 === 0 && number % 3 === 0)
        {
         //number is pushed into array
          print.push("BeepBop");
          console.log("hello");
        }
        //checks if the current number is divisible by 3
        else if (number % 3 === 0) 
        {
            print.push("Beep");
            
          } 
          //checks if the current number is divisible by 5
          else if(number % 5 ===0)
          {
            print.push("Bop");
          } 
          //if it's not divisible by 5 or 3, then it prints the number
          else {
            print.push(number);
          }


        //array is printed in HTML
        document.getElementById("myLoop").innerHTML = print;
    }
    console.log("Finished");