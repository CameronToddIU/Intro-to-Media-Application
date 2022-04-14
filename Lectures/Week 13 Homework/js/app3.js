function getAnswer(event)
{
    let answer = event.target.getAttribute("data-answer");
    event.target.innerHTML = answer;
    console.log(answer);
}