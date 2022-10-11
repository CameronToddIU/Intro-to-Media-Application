let columns = [
["- ","- ","- ","- ","- ","- "],
["- ","- ","- ","- ","- ","- "],
["- ","- ","- ","- ","- ","- "],
["- ","- ","- ","- ","- ","- "],
["- ","- ","- ","- ","- ","- ",],
["- ","- ","- ","- ","- ","- "],
["- ","- ","- ","- ","- ","- "]
]

let playerOneTurn = true
let playerOneToken = "X "
let playerTwoToken = "O "
let playerToken = ""

let column1 = [document.getElementById("columnHolder1"), document.getElementById("columnHolder2"), document.getElementById("columnHolder3"), document.getElementById("columnHolder4"), document.getElementById("columnHolder5"), document.getElementById("columnHolder6"), document.getElementById("columnHolder7") ]


let currentRow = 0;
let currentColumn = 0;


let chossenColumn = ""

let playerHTML = document.getElementById("playerWraper")
let playerHTMLToken = document.getElementById("playerTokenText")
let playerHTMLText = document.getElementById("playerText")

let winCondition = 0

let currentColumn2 = 0


//checks whos turn it is, and also changes innerHTML
function PlayerTurn()
{
    //if it is player ones turn
    if (playerOneTurn == true)
    {
        //makes token drop to X
        playerToken = playerOneToken 
        playerOneTurn = false

        //change innerHTML of player text
        playerHTML.style.backgroundColor = "Red"
        playerHTMLText.innerHTML = "Player 2:"
        playerHTMLToken.innerHTML = "Drop an O"
    } 
    //if it is not player ones turn
    else if (playerOneTurn == false)
    {
        //makes token drop to O
        playerToken = playerTwoToken
        playerOneTurn = true

        //change innerHTML of player text
        playerHTML.style.backgroundColor = "Yellow"
        playerHTMLText.innerHTML = "Player 1:"
        playerHTMLToken.innerHTML = "Drop an X"
    }
}

function Drop (event)
{
    //gets the attribute column from index.html
    currentColumn = event.target.getAttribute("column");
    console.log(currentColumn);

    if (columns[currentColumn-1][0] == "- ")
    {
        PlayerTurn()
        
        //checks if first index of column is unchanged. if it is then place player token
        for(let x = 6; x >= 0; x--)
        {
            console.log("coolumns")
            //checks from back of array to see if token is placed.
            if(columns[currentColumn-1][x] == "- ")
            {
                
                //once slot without token is found, it will place player token
                //first it will put the token in javascript
                columns[currentColumn-1][x] = playerToken;

                //then that token is transferred into the HTML
                column1[currentColumn-1].innerHTML = columns[currentColumn-1][0]
                column1[currentColumn-1].innerHTML += columns[currentColumn-1][1]
                column1[currentColumn-1].innerHTML += columns[currentColumn-1][2]
                column1[currentColumn-1].innerHTML += columns[currentColumn-1][3]
                column1[currentColumn-1].innerHTML += columns[currentColumn-1][4]
                column1[currentColumn-1].innerHTML += columns[currentColumn-1][5]
                currentRow = x
                TokenCheck()

                break;
            }

        }
    }
    else {

        //if token cannot be placed
        //check all other columns for a free space
        for(let i = 1; i <= 7; i++)
        {
            //checks if there is space at the top in a column
            if (columns[i-1][0] == "- ")
            {
                //if there is, tells user to choose another column
                alert("please choose another column")
                console.log("Token can be placed")
                break;
            }
            console.log("checking column " + i);
            if (i == 7)
            {
                //if there is no more space for tokens to drop, game is a draw
                alert("The game is a draw")
            }
        }

    }
}


function TokenCheck()
{
    currentColumn2 = parseInt(currentColumn)
    if (columns[currentColumn2-1][currentRow] == columns[currentColumn-1][currentRow])
    {
        for(let r = 0; r<=4; r++)
        {
            //checks the right side of column when token is placed, to see if it matches itself
            //loops up to 4 times
            if (columns[currentColumn2-1-r][currentRow] == columns[currentColumn-1][currentRow])
            {
                winCondition = winCondition + 1
                console.log("Win Check")
                console.log(currentColumn2)
                console.log(currentRow)
            }
            else
            {
                winCondition = 0
            }
        }
        console.log(" Right Side Checked Out")

    }   

}


