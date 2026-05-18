document.getElementById("year").textContent = new Date().getFullYear();

const selectedDate = document.getElementById("selected-date");
const preferredDate = document.getElementById("preferred-date");
const formNote = document.getElementById("form-note");

document.querySelectorAll(".slot-day").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".slot-day").forEach((day) => day.classList.remove("active"));
    button.classList.add("active");
    selectedDate.textContent = button.dataset.date;
  });
});

if (preferredDate) {
  preferredDate.addEventListener("change", () => {
    if (preferredDate.value) {
      selectedDate.textContent = preferredDate.value;
    }
  });
}

document.querySelector(".booking-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.textContent = "Quote Request Sent";
  formNote.textContent = "Thanks - your quote request has been received. We'll be in touch shortly.";
  event.currentTarget.reset();
});
