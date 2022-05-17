document.getElementById("nav-hamburger").addEventListener("click", (e) => {
  document.querySelector("header nav").classList.toggle("visible");
  e.target.textContent =
    e.target.textContent === "reorder" ? "close" : "reorder";
});

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("token");
  location.replace("index.html");
});

document.getElementById("addpet").addEventListener("click", () => {
  location.replace("addpet.html");
});

document.getElementById("allpets").addEventListener("click", () => {
  location.replace("pets.html");
});