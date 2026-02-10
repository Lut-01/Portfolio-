// ================= NAVIGATION =================
const navLinks = document.querySelectorAll('nav a');

function hideAllSections() {
  document.querySelectorAll('section').forEach(section => {
    section.style.display = 'none';
  });
}

function showSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) section.style.display = 'block';
}

navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    hideAllSections();
    showSection(targetId);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  hideAllSections();
  showSection('profil');
});


// ================= MODAL IMAGE : SCRATCH =================
const imgScratch = document.getElementById("imgScratch");
const modalScratch = document.getElementById("modalScratch");
const modalImgScratch = document.getElementById("modalImgScratch");
const closeScratch = document.querySelector(".closeScratch");

imgScratch.addEventListener("click", () => {
  modalScratch.style.display = "block";
  modalImgScratch.src = imgScratch.src;
});

closeScratch.addEventListener("click", () => {
  modalScratch.style.display = "none";
});

modalScratch.addEventListener("click", (e) => {
  if (e.target === modalScratch) modalScratch.style.display = "none";
});


// ================= MODAL IMAGE : BREAKOUT =================
const imgBreakout = document.getElementById("imgBreakout");
const modalBreakout = document.getElementById("modalBreakout");
const modalImgBreakout = document.getElementById("modalImgBreakout");
const closeBreakout = document.querySelector(".closeBreakout");

imgBreakout.addEventListener("click", () => {
  modalBreakout.style.display = "block";
  modalImgBreakout.src = imgBreakout.src;
});

closeBreakout.addEventListener("click", () => {
  modalBreakout.style.display = "none";
});

modalBreakout.addEventListener("click", (e) => {
  if (e.target === modalBreakout) modalBreakout.style.display = "none";
});


// ================= MODAL IMAGE : SPACE SHOOTER =================
const imgSpace_shooter = document.getElementById("imgSpace_shooter");
const modalSpace_shooter = document.getElementById("modalSpace_shooter");
const modalImgSpace_shooter = document.getElementById("modalImgSpace_shooter");
const closeSpace_shooter = document.querySelector(".closespace_shooter");

imgSpace_shooter.addEventListener("click", () => {
  modalSpace_shooter.style.display = "block";
  modalImgSpace_shooter.src = imgSpace_shooter.src;
});

closeSpace_shooter.addEventListener("click", () => {
  modalSpace_shooter.style.display = "none";
});

modalSpace_shooter.addEventListener("click", (e) => {
  if (e.target === modalSpace_shooter) {
    modalSpace_shooter.style.display = "none";
  }
});
