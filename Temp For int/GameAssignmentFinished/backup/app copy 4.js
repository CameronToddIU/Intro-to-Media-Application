let columns = [
    ["- ", "- ", "- ", "- ", "- ", "- "],
    ["- ", "- ", "- ", "- ", "- ", "- "],
    ["- ", "- ", "- ", "- ", "- ", "- "],
    ["- ", "- ", "- ", "- ", "- ", "- "],
    ["- ", "- ", "- ", "- ", "- ", "- ",],
    ["- ", "- ", "- ", "- ", "- ", "- "],
    ["- ", "- ", "- ", "- ", "- ", "- "]
]

let playerOneTurn = true
let playerOneToken = "X "
let playerTwoToken = "O "
let playerToken = ""

let column1 = [document.getElementById("columnHolder1"), document.getElementById("columnHolder2"), document.getElementById("columnHolder3"), document.getElementById("columnHolder4"), document.getElementById("columnHolder5"), document.getElementById("columnHolder6"), document.getElementById("columnHolder7")]


let currentRow = 0;
let currentColumn = 0;


let chossenColumn = ""

let playerHTML = document.getElementById("playerWraper")
let playerHTMLToken = document.getElementById("playerTokenText")
let playerHTMLText = document.getElementById("playerText")

let winCondition = 0
let winCondition2 = 0;
let winCondition3 = 0;
let winCondition4 = 0;

let currentColumn2 = 0

let alreadyWon = false



//checks whos turn it is, and also changes innerHTML
function PlayerTurn() {
    //if it is player ones turn
    if (playerOneTurn == true) {
        //makes token drop to X
        playerToken = playerOneToken
        playerOneTurn = false

        //change innerHTML of player text
        playerHTML.style.backgroundColor = "Red"
        playerHTMLText.innerHTML = "Player 2:"
        playerHTMLToken.innerHTML = "Drop an O"
    }
    //if it is not player ones turn
    else if (playerOneTurn == false) {
        //makes token drop to O
        playerToken = playerTwoToken
        playerOneTurn = true

        //change innerHTML of player text
        playerHTML.style.backgroundColor = "Yellow"
        playerHTMLText.innerHTML = "Player 1:"
        playerHTMLToken.innerHTML = "Drop an X"
    }
}

function Drop(event) {
    //gets the attribute column from index.html
    currentColumn = event.target.getAttribute("column");

    //checks if the column is open to place a token
    if (columns[currentColumn - 1][0] == "- ") {
        PlayerTurn()

        //checks if first index of column is unchanged. if it is then place player token
        for (let x = 6; x >= 0; x--) {
            //checks from back of array to see if token is placed.
            if (columns[currentColumn - 1][x] == "- ") {

                //once slot without token is found, it will place player token
                //first it will put the token in javascript
                columns[currentColumn - 1][x] = playerToken;

                //then that token is transferred into the HTML
                column1[currentColumn - 1].innerHTML = columns[currentColumn - 1][0]
                column1[currentColumn - 1].innerHTML += columns[currentColumn - 1][1]
                column1[currentColumn - 1].innerHTML += columns[currentColumn - 1][2]
                column1[currentColumn - 1].innerHTML += columns[currentColumn - 1][3]
                column1[currentColumn - 1].innerHTML += columns[currentColumn - 1][4]
                column1[currentColumn - 1].innerHTML += columns[currentColumn - 1][5]
                currentRow = x
                TokenCheck()

                break;
            }

        }
    }
    else {

        //if token cannot be placed
        //check all other columns for a free space
        for (let i = 1; i <= 7; i++) {
            //checks if there is space at the top in a column
            if (columns[i - 1][0] == "- ") {
                //if there is, tells user to choose another column
                alert("please choose another column")
                console.log("Token can be placed")
                break;
            }
            console.log("checking column " + i);
            if (i == 7) {
                //if there is no more space for tokens to drop, game is a draw
                alert("The game is a draw")
            }
        }

    }
}


function TokenCheck() {

    currentColumn2 = parseInt(currentColumn)

    let columnChecker = currentColumn2
    let allowRight = false
    let allowBottom = false
    let allowBottomRight = false
    let allowLeft = false
    let allowBottomLeft = false
    let allowTop = false
    let allowRight2 = false
    let loop = 0
    let loop2 = 0
    let loop3 = 0
    let loop4 = 0
    let loop5 = 0
    let loop6 = 0
    winCondition = 0;
    winCondition2 = 0;
    winCondition3 = 0;
    winCondition4 = 0;

            //the loop that checks each direction from token placement, to see if there's connect 4
            for (let r = 0; r <= 3; r++) {
                let outsidePlay1 = currentColumn2 + loop
                let outsidePlay2 = currentColumn2 - 2 - loop2
                let outsidePlay3 = currentRow + r
                let outsidePlay4 = currentRow + loop3
                let outsidePlay5 = currentRow + loop3
                let outsidePlay6 = currentRow + loop4
                let outsidePlay7 = currentColumn2 + loop3


                //all these outsideplay variables are for when you are placing tokens. in order to not get any errors show up in console, you need to know if one of the directions checked will 
                //go outside of the array. if it does go outside of play, then it's corrosponding bool is set to false (so the top of the array in this case is 0, so if the check for that is greater than 0, then the real win check never happens, thus causing no error in console). these are all checked and reset every loop
                if (outsidePlay1 > 6)
                {
                    allowRight = false
                }
                else 
                {
                    allowRight = true
                }
                if (outsidePlay7 > 6)
                {
                    allowRight2 = false
                }
                else 
                {
                    allowRight2 = true
                }
                if (outsidePlay2 < 0)
                {
                    allowLeft = false
                }
                else 
                {
                    allowLeft = true
                }
                if (outsidePlay3 > 5)
                {
                    allowBottom = false
                }
                else 
                {
                    allowBottom = true
                }
                if (outsidePlay4 >5)
                {
                    allowBottomRight = false
                }
                else
                {
                    allowBottomRight = true
                }
                if (outsidePlay5 < 0 )
                {
                    allowTop = false
                }
                else 
                {
                    allowTop = true
                }
                if (outsidePlay6 > 5)
                {
                    allowBottomLeft = false
                }
                else
                {
                    allowBottomLeft = true
                }
                    //checks the right side of column when token is placed, to see if it matches dropped token
                    if (allowRight == true)
                    {
                        //checks the right side of column when token is placed, to see if it matches dropped token
                        if (columns[currentColumn2 - 1][currentRow] == columns[currentColumn2 + loop][currentRow]) {   
                            loop++
                            winCondition = winCondition + 1
                            console.log("Win Check Right")
                            console.log("win " + winCondition)
                            Win()
                        }
                    }
                    if (allowLeft == true)
                    {
                        //checks the left side of column when token is placed, to see if it matches dropped token
                        if (columns[currentColumn2 - 1][currentRow] == columns[currentColumn2 - 2 - loop2][currentRow])
                        {

                            loop2++
                            winCondition = winCondition + 1
                            console.log("Win Check Left")
                            console.log("win " + winCondition)
                            Win()
                        }
                    }

                    
                    if (allowBottom == true)
                    {
                        //checks underneath the token when token is placed, to see if it matches dropped token
                        if (columns[currentColumn2 - 1][currentRow]==columns[currentColumn2 - 1][currentRow + r])
                        {

                            winCondition2 = winCondition2 + 1
                            console.log("winning Bottom "+winCondition2)
                            Win()
                        }
                    }

                    
                    if (allowBottomRight == true && allowRight2 == true)
                    {
                        //checks the bottom right when token is placed, to see if it matches dropped token
                        if(columns[currentColumn2-1][currentRow]== columns[currentColumn2 + loop3][currentRow + (1+loop3)])
                        {
                            loop3++
                            winCondition3 = winCondition3 + 1
                            console.log("winning Bottom Right "+winCondition3)
                            Win()
                        }
                    }
                    if (allowTop == true && allowLeft == true)
                    {
                        //checks the top left when token is placed, to see if it matches dropped token
                        if (columns[currentColumn2-1][currentRow]== columns[currentColumn2 - 2 - loop4][currentRow - 1 -loop4])
                        {
                            
                            loop4++
                            winCondition3 = winCondition3 + 1
                            console.log("winning top Left "+winCondition3)
                            Win()
                        }
                    }
                    if (allowLeft == true && allowBottomLeft == true)
                    {
                        //checks bottom left, to see if it matches dropped token
                        if (columns[currentColumn2 - 1][currentRow] == columns[currentColumn2 - 2 - loop5][currentRow +1 +loop5]) 
                        {
                            loop5++
                            winCondition4 = winCondition4 +1
                            console.log("Winning Bottom Left "+ winCondition4)
                            Win()
                        }
                    }
                    if (allowRight == true && allowTop == true)
                    {
                        //checks top right to see if it matches dropped token
                        if (columns[currentColumn2-1][currentRow]== columns[currentColumn2 + loop6][currentRow -1 -loop6])
                        {
                            
                            loop6++
                            winCondition4 = winCondition4 +1
                            console.log("Winning Top Right "+winCondition4)
                            Win()
                        }
                    }
                    



        }

}

function Win()
{
    //checks if wincondition is greater than 3, because if it is, then that means the player got 4 in a row
    if (winCondition >= 3 && alreadyWon == false) {
        winPlayer()
        alreadyWon = true
    }

    //notice that this condition is higher than all the other ones. this check is for the bottom check, and it is 4 rather than 3 because it doesn't check itself. this might have something to do with using the variable r from the loop in the check, but it works like this, so whatever.
    if (winCondition2 >=4 && alreadyWon == false)
    {
        winPlayer()
        alreadyWon = true
    }
    if (winCondition3 >=3 && alreadyWon == false)
    {
        winPlayer()
        alreadyWon = true
    }
    if (winCondition4 >=3 && alreadyWon == false)
    {
        winPlayer()
        alreadyWon = true
    }
}

function winPlayer()
{

    //congrats the player that wins.
    //*note, I technically have to switch the "player one" win with "player two", because playerOneTurn is changed before the win happens.
    if (playerOneTurn == true)
    {
        alert("Congrats Player Two, you Win!!!")
    }
    else 
    {
        alert("Congrats Player One, you Win!!!")
    }
}