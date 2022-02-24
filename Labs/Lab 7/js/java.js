var x = document.getElementById("myButton");
var y = document.getElementById("removeAgesButton");

let ages = [];
let age55 = 0;
let ageCheck = 0;
var dead = "dead";

//Loop to Generate Ages
for(let i = 0; i < 20; i++) 
{
//.push puts the randomly generated number in an array
//.floor rounds the number down
//math.random generates a random number between 0-1
  ages.push( Math.floor(Math.random() * 50 ))
}

//goes through the ages array adding 1 to each age
//there is a 50% chance for a number over 55 to be removed from array
function agesLoop() 
{
    for(let i = 0; i<ages.length; i++)
    {
        ages[i] = ages[i] + 1;
        if(ages[i]>=55)
        {
            ageCheck = i;
            age55 = Math.round(Math.random());
            console.log("Age Check " + age55);
            console.log("Death Check " +ageCheck);
            if(age55 == 1)
            {
                ages[ageCheck] = dead;
                // ages.splice(ageCheck,1,dead);
                console.log("Age Removed " + ageCheck);
                console.log("dead " +dead);
            }
        }
    }

console.log(ages);
}

function removeAges()
{
    ages.splice(0,ages.length);
    console.log(ages);
}

function newAge()
{
    ages.push( Math.floor(Math.random() * 50 ));
    console.log(ages);
}

//When a button is pressed
    // loop through the ages
    //add one to age
    //if their age is greater than 55
          // on a 50% chance
          // remove them from the array

                  //(Lookup javascript array splice)

//When a different button is pressed
   // clear out old data in the div
    // write the content of the array to the screen

//when a  third button is pressed

  // add a new age between 1 and 50