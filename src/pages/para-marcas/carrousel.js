const cards = document.querySelectorAll(".carousselCard");
const track = document.querySelector(".carousselTrack");
const prevBtn = document.querySelector(".arrow.left");
const nextBtn = document.querySelector(".arrow.right");

let currentIndex = 0;
let autoSlide;

function updateActiveCard() {
  cards.forEach((card, index) => {
    card.classList.toggle("active", index === currentIndex);
  });
  if (window.innerWidth <= 1024) {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
  }
}

function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateActiveCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateActiveCard();
}

function startAutoSlide() {
  if (window.innerWidth > 1024) {
    autoSlide = setInterval(nextCard, 3000);
  }
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", prevCard);
  nextBtn.addEventListener("click", nextCard);
}

updateActiveCard();
startAutoSlide();
