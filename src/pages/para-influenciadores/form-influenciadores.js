// Seleciona o formulário
const form = document.querySelector("form");

// Campos numéricos que precisam de formatação/validação
const numericFields = [
  "valorCampanha",
  "seguidoresInstagram",
  "seguidoresTikTok",
  "inscritosYouTube"
];

// Restringe a digitação a apenas números e vírgula
numericFields.forEach(id => {
  const input = document.getElementById(id);
  if (input) {
    input.addEventListener("keypress", (e) => {
      const char = e.key;
      // Permite apenas dígitos e vírgula
      if (!/[0-9,]/.test(char)) {
        e.preventDefault();
      }
    });

    // Formata automaticamente com vírgula como separador de milhar
    input.addEventListener("input", () => {
      let raw = input.value.replace(/\D/g, "");
      if (raw) {
        input.value = raw.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } else {
        input.value = "";
      }
    });
  }
});

// Validação e envio do formulário
form.addEventListener("submit", function(event) {
  event.preventDefault(); // impede envio padrão

  let valido = true;

  // Valida todos os campos numéricos
  numericFields.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      // Aceita apenas dígitos e vírgulas
      if (!/^[\d,]+$/.test(input.value)) {
        valido = false;
        input.classList.add("erro");
      } else {
        input.classList.remove("erro");
      }
    }
  });

  if (!valido) {
    alert("Preencha os campos numéricos apenas com números e vírgulas.");
    return;
  }

  // Integração com EmailJS usando o template dos influenciadores
  emailjs.sendForm("service_z3dskji", "template_agfrgtu", form)
    .then(() => {
      const msg = document.getElementById("mensagem");
      if (msg) {
        msg.classList.remove("oculto"); // mostra mensagem de sucesso
        setTimeout(() => msg.classList.add("oculto"), 4000);
      }
    })
    .catch((err) => {
      console.error("Erro ao enviar:", err);
      alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
    });
});
