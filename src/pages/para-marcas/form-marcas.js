// Inicializa o EmailJS com sua chave pública
emailjs.init("zi_XQDHjKqOpq6Ipo");
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let valido = true;
  const input = document.getElementById("investimento");
  if (input && !/^\d+(,\d{3})*$/.test(input.value)) {
    valido = false;
    input.classList.add("erro");
  } else {
    input?.classList.remove("erro");
  }

  if (!valido) {
    alert("Preencha o campo de investimento apenas com números.");
    return;
  }

  emailjs
    .sendForm("service_dmn32ju", "template_j7jbudl", form)
    .then(() => {
      const msg = document.getElementById("mensagem");
      msg.classList.remove("oculto");
      setTimeout(() => msg.classList.add("oculto"), 4000);
    })
    .catch((err) => {
      console.error("Erro ao enviar:", err);
      alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
    });
});

const numericFields = ["investimento"];

numericFields.forEach((id) => {
  const input = document.getElementById(id);
  if (input) {
    input.addEventListener("input", () => {
      let raw = input.value.replace(/\D/g, "");
      input.value = raw.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
  }
});
