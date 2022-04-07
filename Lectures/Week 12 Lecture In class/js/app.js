let numberInput = document.getElementById("numberInput");
let result = document.getElementById("number");

let ticTac = [
    [1,1,2],
    [1,2,0],
    [1,2,0]
];

let empty = [
    ["hello"]
]

let empty2;

let empty3;


function Show()
{
    empty = ticTac[0].filter(ticTac => ticTac == 1);

    console.log(empty);

    empty2 = ticTac[0].filter(function(){
        for(i = 0; i <= 1; i++)
        {
            empty3 += ticTac[1];
            console.log("array 3 "+empty3);
        }
    })

    console.log(empty2)
}



Show();