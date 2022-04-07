let HTMLobjects = document.getElementById("objects");

let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

   let div = [];


   for(i=0; i<objects.length; i++)
   {
        div[i] = document.createElement("div");

        div[i].style.backgroundColor = objects[i].color;
        div[i].style.height = objects[i].height+ "px";
        div[i].style.width = objects[i].width +"px";

        document.body.appendChild(div[i]);

       console.log("Loop "+i);
   }