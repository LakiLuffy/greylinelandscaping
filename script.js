const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const quoteForm = document.querySelector(".quote-form");
const formStatus = document.getElementById("form-status");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const syncHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

if (navToggle && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-active");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-active");
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (quoteForm && formStatus) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Thanks - your quote request has been prepared. Please call 0468 107 217 to confirm, or connect this form to a backend to receive submissions.";
    quoteForm.reset();
  });
}
