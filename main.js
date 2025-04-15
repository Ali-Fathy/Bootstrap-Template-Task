let menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("show");
});

window.onclick = function (e) {
  if (!e.target.matches(".menu-btn") && !e.target.matches(".icon")) {
    const menu = document.getElementById("menuLinks");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  }
};
