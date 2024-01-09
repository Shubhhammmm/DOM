let elemAll = document.querySelectorAll(".elem");

// let elemimg1 = document.querySelector(".elem1 img");

// elem1.addEventListener("mousemove", function (event) {
//   console.log(event);
//   elemimg1.style.left = event.x + "px";
//   elemimg1.style.top = event.y + "px";
// });

// elem1.addEventListener("mouseenter", function () {
//   elemimg1.style.opacity = 1;
// });

// elem1.addEventListener("mouseleave", function () {
//   elemimg1.style.opacity = 0;
// });

// let elem2 = document.querySelector(".elem2");
// let elemimg2 = document.querySelector(".elem2 img");

// elem2.addEventListener("mousemove", function (event) {
//   console.log(event);
//   elemimg2.style.left = event.x + "px";
//   elemimg2.style.top = event.y + "px";

// });

// elem2.addEventListener("mouseenter", function () {
//   elemimg2.style.opacity = 1;

// });

// elem2.addEventListener("mouseleave", function () {
//     elemimg2.style.opacity = 0;

//   });

console.log(elemAll);
elemAll.forEach((data) => {
  let img = data.childNodes[3];
  console.log(img);

  data.addEventListener("mousemove", function (event) {
    img.style.left = event.x + "px";
    img.style.top = event.y + "px";
  });

  data.addEventListener("mouseenter", function () {
    img.style.opacity = 1;
  });

  data.addEventListener("mouseleave", function () {
    img.style.opacity = 0;
  });
});
