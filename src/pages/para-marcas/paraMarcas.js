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

//////////////////////////// Scroll suave para o form //////////////////////////
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
});

/////////////////////////// Formatação de números /////////////////////////////
// Apenas o campo de investimento precisa de máscara numérica
const numericFields = ["investimento"];

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

/////////////////////////// Envio do formulário via EmailJS ///////////////////
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // impede envio real

  // Validação: garantir que o campo investimento não tenha letras
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
    alert("Preencha o campo de investimento apenas com números.");
    return;
  }

  // Envia via EmailJS usando o template de marcas
  emailjs.sendForm(
    "service_z3dskji",   // ID do serviço
    "template_ejg3crc",  // ID do template para marcas
    form
  )
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
