function changeColor (event)
{
    let color = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = color;
}