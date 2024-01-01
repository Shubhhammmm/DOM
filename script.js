// /*
// 4 pillars of DOM

// 1. Selection of an  element --
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listener

// */

// // let h1 = document.getElementById("h1-1")

// // h1.addEventListener("click" , ()=>{
// //     console.log("clicked");
// //     alert("chalgaya bhai")
// // })

// // document.querySelector("h1").addEventListener("click" , () =>{
// //         console.log("clicked");
// //         // alert("chalgaya bhai")

// //     })

// // let a = document.querySelector("h1")
// //  a.innerHTML = "dom"
// let a = document.querySelector("h1")
// a.addEventListener("click", function () {
//   a.innerHTML = "ab badlega";
//   a.style.color = "blue"

//   console.log("clicked");
// });

// //     let b = document.getElementById("h1-1")

// // b.innerHTML = "huii";
// // b.style.color = 'red';
// // b.style.backgroundColor = 'green'

let bulb = document.getElementById("bulb")
let button = document.querySelector("button")

let flag = false;

bulb.addEventListener("click" , () => {
    console.log("Clicked");
})

button.addEventListener('click' , () =>{
    // console.log("clicked");
   
    if(flag === false){
        bulb.innerHTML = "Bulb is on"
        bulb.style.backgroundColor = "yellow";  
        flag = 1;
        
    } else{
        bulb.innerHTML = "Bulb is off"
        bulb.style.backgroundColor = "white";
        flag = 0;
    }
    
})

// let a = document.querySelector("h2")
// a.innerHTML = "changed"

// document.querySelector("h2").addEventListener("click", function(){  a.innerHTML = "chnagedd"
//     console.log("clicked");
// })

// document.querySelector("h2").innerHTML = "Change"

let h = document.querySelectorAll('h1')   
console.log(h);      
  
h.forEach((e)=>{
    console.log(e.outerHTML);
    console.log(e.innerText);

})