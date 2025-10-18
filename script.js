// Scroll suave até o conteúdo
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("main-content").scrollIntoView({ behavior: "smooth" });
});

// Controle do modal
const universalModal = document.getElementById("universalModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = universalModal.querySelector(".close");

const modalButtons = document.querySelectorAll(".openModalBtn");

modalButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modalTitle.textContent = btn.dataset.title;
    modalText.textContent = btn.dataset.text;
    universalModal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  universalModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === universalModal) {
    universalModal.style.display = "none";
  }
});
