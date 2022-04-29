let square1 = document.getElementById("Square 1");
let square2 = document.getElementById("Square 2");
let square3 = document.getElementById("Square 3");
let enemy = document.getElementById("text");
let player = document.getElementById("playerHealth")
let playerKills = document.getElementById("playerKills");

let drawPile = [1,1,1,2,2,2,3,3,3,5,5];

let hand = [];

let drawPileNumber = 0;

let com = [square1, square2, square3];

let cardCheck = [];

let usedCards = 0;

let useCards = false

let enemyHealth = 0;

let playerHealth = 50;

let attackCard = 0;

let attack = 0;

let firstTurn = true;

let firstTurn2 = true;

let enemyAttack = 1;

let newEnemyCheck = true;

let enemiesKilled = 0;

let dead = false;

function turn (event)
{

    //checks if enemy health is less than 0
if(enemyHealth <=0)
{
    if(firstTurn == true)
    {
        //if its the first turn, give alert message
       alert("You venture into a dungeon, to be ambushed by a monster!"); 
       firstTurn = false;
       //randomizes enemy health
       enemyHealth = Math.round(Math.random()*10 + 10);
       enemy.innerHTML = "Enemy Health: "+enemyHealth+ "<br />" +"Enemy Attack: " + enemyAttack;
       //new enemy check to false
       newEnemyCheck = false;
    }else {

    //display alert message after killing enemy
    alert("You Killed The Enemy, But another Approaches...");
    //increase enemy killed counter
    enemiesKilled++;
    playerKills.innerHTML = "Enemies Killed: " +enemiesKilled;
    //randomizes enemy health
    enemyHealth = Math.round(Math.random()*10 + 10);
    enemy.innerHTML = "Enemy Health: "+enemyHealth+ "<br />" +"Enemy Attack: " + enemyAttack;
    newEnemyCheck = true;
} 

}

//checks if enemy health is greater than 0
if (enemyHealth > 0)
{
    //checks if its the first turn
    if(firstTurn2 == true)
    {
        
        firstTurn2 = false;

    }else {
        //checks if it's a new enemy
        if(newEnemyCheck == true)
        {
            console.log("Check")
            newEnemyCheck = false;
        } else {
            //if enemy is not new, and its not the first turn, player takes damage
            playerHealth -= enemyAttack
            player.innerHTML = "Player Health: " +playerHealth;
            enemyAttack = Math.round(Math.random()*5+1);
            enemy.innerHTML = "Enemy Health: "+enemyHealth+ "<br />" +"Enemy Attack: " + enemyAttack;
        }

    }

}

//checks if player health is less than 0
if (playerHealth <= 0)
{
    dead = true;
    alert("You Died!  You may try restart by clicking next Turn ");

    //When you die, Resets everything to default values

 hand = [];

 drawPileNumber = 0;

 com = [square1, square2, square3];

 cardCheck = [];

 usedCards = 0;

 useCards = false;

 enemyHealth = 0;

 playerHealth = 50;

 attackCard = 0;

 attack = 0;

 firstTurn = true;

 firstTurn2 = true;

 enemyAttack = 1;

 newEnemyCheck = true;

 enemiesKilled = 0;

 //resetting inner.html values
 enemy.innerHTML = "Enemy Health: "+enemyHealth+ "<br />" +"Enemy Attack: " + enemyAttack;
 player.innerHTML = "Player Health: " +playerHealth;
 playerKills.innerHTML = "Enemies Killed: " +enemiesKilled;
 

}

//reseting certain values upon a new turn
useCards = true;
usedCards = 0;
cardCheck = [];
hand = [];

    //checks if drawpile is greater than 3
    if (drawPile.length >= 3)
    {
        //loops through twice to generate the cards player will use.
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
    //checks if you can use the cards yet ( you can't before first clicking end turn, and upon dying);
   if (useCards == true && dead == false)
   {


    //card becomes equal to touch
    let card = event.target.getAttribute("card");

    //checks to make sure the correct card is clicked on
    if (card == "touch")
    {
        //adds 1 to usedCards counter
        usedCards++;

    //checks if usedCards is greater than 2. (stops you from playing more than 2 cards a turn)
    if (usedCards >2)
    {
        alert("cannot play anymore cards");

        //checks if the card clicked is the same card.
    } else if(cardCheck[0] == event.target.getAttribute("cardID")||cardCheck[1] == event.target.getAttribute("cardID"))
    {
        alert("cannot choose same card");
        usedCards--;
    } else {


        console.log("Attacking!");
        //attackCard is set equal to cardID (which is a # 0-2)
        attackCard = event.target.getAttribute("cardID")

        //attack is what numbers were randomized in hand array, then chosen based on what user clicks
        attack = hand[attackCard];

        //enemy loses health based on attack
        enemyHealth -= attack;

        //updates enemy health, and color of chosen card
        enemy.innerHTML = "Enemy Health: "+enemyHealth+ "<br />" +"Enemy Attack: " + enemyAttack;
        let color = event.target.getAttribute("data-color");
        event.target.style.backgroundColor = color;
        let choosenCard = event.target.getAttribute("cardID");
        // pushes chosen card into an array to be checked later
        cardCheck.push(choosenCard);
    }  
   }
} else{
    //alerts player to end first turn (this starts the game)
    alert ("end turn first");

    //makes the squares change back to gray and show arrows instead of numbers.
    square1.style.backgroundColor= "gray";
    square2.style.backgroundColor= "gray";
    square3.style.backgroundColor= "gray";
    square1.innerHTML= "---->";
    square2.innerHTML= "---->";
    square3.innerHTML= "---->";
}
}