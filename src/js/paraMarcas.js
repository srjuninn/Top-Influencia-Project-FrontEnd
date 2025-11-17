////////////////////////////// Carrossel /////////////////////////////////////
const cards = document.querySelectorAll(".carousselCard");

let currentIndex = 0;
let autoSlide;

// Atualiza o card ativo
function updateActiveCard() {
  cards.forEach((card, index) => {
    card.classList.toggle("active", index === currentIndex);
  });
}

// Avançar automaticamente
function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateActiveCard();
}

// Auto slide a cada 3s
function startAutoSlide() {
  autoSlide = setInterval(nextCard, 3000);
}

// Inicialização
updateActiveCard();
startAutoSlide();

// Scroll suave para a seção de contato 
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
});
/////////////////////////// Mensagem de envio do formulário ///////////////////
// Seleciona o formulário
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // impede envio real
  const msg = document.getElementById("mensagem");

  // mostra a mensagem
  msg.classList.remove("oculto");

  // depois de 4 segundos, esconde novamente
  setTimeout(() => {
    msg.classList.add("oculto");
  }, 4000);
});

