// Seleciona elementos principais
const cards = document.querySelectorAll(".carousselCard");
const track = document.querySelector(".carousselTrack");
const prevBtn = document.querySelector(".arrow.left");
const nextBtn = document.querySelector(".arrow.right");

let currentIndex = 0;
let autoSlide;

// Atualiza o card ativo
function updateActiveCard() {
  cards.forEach((card, index) => {
    card.classList.toggle("active", index === currentIndex);
  });

  // Em telas menores (tablet/mobile), move o track com translateX
  if (window.innerWidth <= 1024 && track) {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
  }
}

// Avança para o próximo card
function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateActiveCard();
}

// Volta para o card anterior
function prevCard() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateActiveCard();
}

// Inicia o auto slide
function startAutoSlide() {
  clearInterval(autoSlide); // limpa qualquer intervalo anterior

  if (window.innerWidth > 1366) {
    // Desktop grande: troca a cada 3s
    autoSlide = setInterval(nextCard, 3000);
  } else if (window.innerWidth >= 1024 && window.innerWidth <= 1366) {
    // Laptop: troca a cada 4s
    autoSlide = setInterval(nextCard, 4000);
  }
}

// Eventos das setas
if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", prevCard);
  nextBtn.addEventListener("click", nextCard);
}

// Reinicia comportamento ao redimensionar a tela
window.addEventListener("resize", () => {
  startAutoSlide();
  updateActiveCard();
});

// Inicialização
updateActiveCard();
startAutoSlide();
