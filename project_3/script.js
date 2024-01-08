let cursor = document.querySelector(".cursor")

let contain = document.getElementById("container")

contain.addEventListener("mousemove" , function(event){
    console.log("Moving");

   cursor.style.left = event.x+"px"
   cursor.style.top = event.y+"px"
   console.log(cursor.style.top);

    

})