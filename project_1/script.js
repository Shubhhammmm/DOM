let stranger = document.querySelector("h5");

let flag = true;

document.getElementById("add").addEventListener("click", function () {
  if (flag === true) {
    console.log("CLickec");
    stranger.innerHTML = "Friends😊";
    stranger.style.color = "green";
    this.innerText = "Remove Friend";

    flag = false;
  } else {
    stranger.innerHTML = "Blocked ❌";
    stranger.style.color = "red";
    this.innerText = "Add Friend";

    flag = true;
  }
});

// document.getElementById("remove").addEventListener("click" , function(){
//  console.log("removed");
//  stranger.innerHTML = "Blocked ❌"

// })
