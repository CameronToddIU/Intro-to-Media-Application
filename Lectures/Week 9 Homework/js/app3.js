let word1 = document.getElementById("username");
let word2 = document.getElementById("password");
let result = document.getElementById("result");

let confirm = "Password and Username Secured";

let denied = "Password and Username Not Matching";

function getText()
{
    let username = word1.value;

    let password = word2.value;

    if(username == password)
    {
        result.innerHTML = confirm;
        console.log("hello");
    }
    else
    {
        result.innerHTML = denied;
        console.log("hello2");
    }

}
