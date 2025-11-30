const scrollBtn = document.getElementById("scrollBtn");
if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
  });
}
