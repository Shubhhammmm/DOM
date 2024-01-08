let con = document.getElementById("container");
let love = document.getElementById("i");

con.addEventListener("click", function () {
  const promise = new Promise((resolve, reject) => {
    let a = Math.floor(Math.random() * 10);
    if (a >= 5) {
      resolve(`working for this number ${a}`);
    } else {
      reject(`will not work for this number ${a}`);
    }
  })
    .then((res) => console.log(res))
    .catch((e) => console.log(`opps 👎 !! try harder ${e}`));
});

// console.log("///4");

con.addEventListener("click", function () {
  // console.log(param , "work");
  console.log("Clicked");
  love.style.transform = "translate(-50% , -50%) scale(2)";
  love.style.opacity = 0.8;
  love.style.color = "red";
  setTimeout(() => {
    love.style.opacity = 0;
    // love.style.color = "white";
  }, 2000);
  setTimeout(() => {
    love.style.transform = "translate(-50% , -50%) scale(1)";
    love.style.color = "white";
  },2000);
});

// console.log("i");
