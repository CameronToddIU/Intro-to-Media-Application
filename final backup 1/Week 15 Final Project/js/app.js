let square1 = document.getElementById("Square 1");
let square2 = document.getElementById("Square 2");
let square3 = document.getElementById("Square 3");

let drawPile = [1,1,1,2,2,2,3,3,3,5,5];

let discardPile = [];

let hand = [];

let drawPileNumber = 0;

let com = [square1, square2, square3];

let cardCheck = [];

usedCards = 0;

let useCards = false

let playerHealth = 50;

let attackCard = 0;

let attack = 0;

function turn (event)
{

useCards = true;
usedCards = 0;
cardCheck = [];

    if (drawPile.length >= 3)
    {
        for(let i = 0; i <= 2; i++)
        {

        
        //gets random number between 0 and length of pile array.
        drawPileNumber = Math.round(Math.random() * drawPile.length);

        if(drawPileNumber >= drawPile.length)
        {
            //checks if the number generated is bigger than the length of draw pile.
            //if so, makes it equal to length minus 1, so number gen. isnt undefined
            drawPileNumber = drawPile.length -1;
            console.log("Minusing");
        }
        console.log(drawPileNumber);
        //makes square equal to number generated in pile
        hand += drawPile[drawPileNumber];
        com[i].innerHTML = drawPile[drawPileNumber];
        com[i].style.backgroundColor = "brown";
        console.log("current loop " +i);
        }
    }
    //check if there is at least 3 cards in draw pile
    //if so, put the 3 cards into hand
    //if not, draw whatever is left in pile, shuffle, then draw the rest equal to the difference
    //take Damage from enemy

    

}


function useCard (event)
{

   if (useCards == true)
   {



    let card = event.target.getAttribute("card");


    if(cardCheck[0] == event.target.getAttribute("cardID")||cardCheck[1] == event.target.getAttribute("cardID"))
    {
        alert("cannot choose same card");
    }  else if (card == "touch")
    {
        usedCards++;
    }

    if (usedCards >2)
    {
        alert("cannot play anymore cards");
        
    } else 
    {
        console.log("Attacking!");
        attackCard = event.target.getAttribute("cardID")

        attack = hand[attackCard];

        playerHealth -= attack;
        let color = event.target.getAttribute("data-color");
        event.target.style.backgroundColor = color;
        let choosenCard = event.target.getAttribute("cardID");
        cardCheck.push(choosenCard);
    }
    } else{
        alert ("end turn first");
    }
}