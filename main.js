let menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
  document.getElementById("menuLinks").classList.toggle("show");
});

// Optional: click outside to close
window.onclick = function (e) {
  if (!e.target.matches(".menu-btn")) {
    const menu = document.getElementById("menuLinks");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  }
};
