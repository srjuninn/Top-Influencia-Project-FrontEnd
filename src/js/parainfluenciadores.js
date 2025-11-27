////////////////////////////// Carrossel /////////////////////////////////////
const cards = document.querySelectorAll(".carousselCard");

let currentIndex = 0;
let autoSlide;

function updateActiveCard() {
  cards.forEach((card, index) => {
    card.classList.toggle("active", index === currentIndex);
  });
}

function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateActiveCard();
}

function startAutoSlide() {
  autoSlide = setInterval(nextCard, 3000);
}

updateActiveCard();
startAutoSlide();

//////////////////////////// Scroll suave para o form //////////////////////////
const scrollBtn = document.getElementById("scrollBtn");
scrollBtn.addEventListener("click", () => {
  document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
});

/////////////////////////// Mensagem de envio do formulário ///////////////////
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // impede o envio padrão

  emailjs.sendForm("service_z3dskji", "template_agfrgtu", form)
    .then(() => {
      const msg = document.getElementById("mensagem");
      msg.classList.remove("oculto"); // mostra mensagem de sucesso
      setTimeout(() => msg.classList.add("oculto"), 4000);
    })
    .catch(err => {
      console.error("Erro ao enviar:", err);
      alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
    });
});
