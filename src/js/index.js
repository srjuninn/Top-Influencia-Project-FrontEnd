const btnMarca = document.getElementById("btnMarca");
const btnInfluenciador = document.getElementById("btnInfluenciador");

function smoothRedirect(url) {
  document.body.classList.add("fade-out"); // inicia transição
  setTimeout(() => {
    window.location.href = url; // redireciona após a animação
  }, 500); // tempo igual ao do transition
}

btnMarca.addEventListener("click", () => {
  smoothRedirect("/src/pages/para-marcas/paraMarcas.html");
});

btnInfluenciador.addEventListener("click", () => {
  smoothRedirect("/src/pages/para-influenciadores/paraInfluenciadores.html");
});
// menu hamburguer
// Seleciona os elementos
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

// Adiciona evento de clique
hamburgerBtn.addEventListener("click", () => {
  // Alterna a classe "show" no menu
  navMenu.classList.toggle("show");

  // Alterna a animação do botão hambúrguer (vira X)
  hamburgerBtn.classList.toggle("active");
});
