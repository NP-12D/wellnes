let burger = document.querySelector(".burger");
let menu = document.querySelector("nav >div:nth-of-type(2)");
let menu_content = document.querySelector(".menu_cont");
let burger_listitems = document.querySelectorAll(
  ".menu_content> a,.menu_content> div"
);

burger.addEventListener("click", burgermenu);
burger_listitems.forEach((item) => {
  item.addEventListener("click", () => {
    burgermenu();
  });
});
burger.addEventListener("click", burgermenu);
menu.addEventListener("click", function () {
  if (menu.classList.contains("menu")) {
    burgermenu();
  }
});

function burgermenu() {
  menu.classList.toggle("menu");
  menu_content.classList.toggle("menu_content");
  document.body.classList.toggle("no-scroll");
  document.querySelectorAll(".line").forEach((line) => {
    line.style.backgroundColor =
      line.style.backgroundColor === "white" ? "black" : "white";
  });
}

// window.addEventListener("scroll", function () {
//   if (window.scrollY > 20) {
//     document.querySelector(".pages_list").style.display  = "relative";
//   } else {
//     document.querySelector(".pages_list").classList.add(".pages_list");
    
//   }
// });




document.querySelector(".pages_list").addEventListener("touchstart", () => {
  document.querySelector(".pages_list").classList.toggle("open");
});
