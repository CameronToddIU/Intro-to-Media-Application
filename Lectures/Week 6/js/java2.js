// let i = 0;

// while(i < 5)
// {
//     i++;
//     console.log("hello");
// }

// for(l=0; l<5; l++)
// {
//     console.log("hello2");
//     document.write("test");
// }

let exampleDiv = document.getElementById("example");

let fruits = ["apples", "oranges", "tomatoes"]

console.log("length of array " +fruits.length);

console.log("first fruit " +fruits[1]);

fruits[1] = "kiwi";

console.log("2nd fruit " +fruits[1]);

for(let i = 0; i < 3; i++)
{
    exampleDiv.innerHTML += fruits[i] + "<br/>"
}

fruits.forEach(function(fruits)
{
    exampleDiv.innerHTML += fruits + "<br/>"
})