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
