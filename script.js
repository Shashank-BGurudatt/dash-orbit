document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle-btn");

  // Dark mode toggle
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      toggleBtn.textContent = "Switch to Dark Mode";
    } else {
      toggleBtn.textContent = "Switch to Light Mode";
    }
  });

  // Dropdown sequence logic (Result Type before Iteration)
  const dropdowns = [
    document.getElementById("version"),
    document.getElementById("bp-type"),
    document.getElementById("bp-name"),
    document.getElementById("automation"),
    document.getElementById("result-type"),
    document.getElementById("iteration")
  ];

  dropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener("focus", () => {
      if (index > 0) {
        const prev = dropdowns[index - 1];
        if (!prev.value) {
          const error = dropdown.parentElement.querySelector(".error-message");
          if (error) error.style.display = "block";
          dropdown.blur();
        }
      }
    });

    dropdown.addEventListener("change", () => {
      const error = dropdown.parentElement.querySelector(".error-message");
      if (error) error.style.display = "none";
      if (index < dropdowns.length - 1) {
        dropdowns[index + 1].disabled = false;
      }
    });
  });
});
