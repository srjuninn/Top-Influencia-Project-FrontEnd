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

/////////////////////////// Formatação de números /////////////////////////////
// IDs atualizados para camelCase
const numericFields = [
  "valorCampanha",
  "seguidoresInstagram",
  "seguidoresTikTok",
  "inscritosYouTube"
];

numericFields.forEach(id => {
  const input = document.getElementById(id);

  if (input) {
    input.addEventListener("input", () => {
      // Remove tudo que não for dígito
      let raw = input.value.replace(/\D/g, "");

      // Formata com separador de milhar usando vírgula
      input.value = raw.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
  }
});

/////////////////////////// Mensagem de envio do formulário ///////////////////
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // impede o envio padrão

  // Validação: garantir que os campos numéricos não tenham letras
  let valido = true;
  numericFields.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      // Aceita apenas dígitos e vírgulas como separador
      if (!/^\d+(,\d{3})*$/.test(input.value)) {
        valido = false;
        input.classList.add("erro"); // opcional: destacar erro
      } else {
        input.classList.remove("erro");
      }
    }
  });

  if (!valido) {
    alert("Preencha os campos numéricos apenas com números.");
    return;
  }

  // Envia via EmailJS
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
