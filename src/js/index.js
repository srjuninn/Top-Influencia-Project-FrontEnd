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
