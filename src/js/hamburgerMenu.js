// Lógica do menu hamburguer
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  hamburgerBtn.classList.toggle("active");
});

// Lógica da imagem que redireciona para /index.html
const voltarImg = document.getElementById("backToMenu"); // id da imagem no HTML

if (voltarImg) {
  voltarImg.addEventListener("click", () => {
    window.location.href = "/index.html";
  });
}
