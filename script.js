document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle-btn");

  // Dark mode toggle
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    // Optional: change button text
    if (document.body.classList.contains("light-mode")) {
      toggleBtn.textContent = "Switch to Dark Mode";
    } else {
      toggleBtn.textContent = "Switch to Light Mode";
    }
  });

  // Dropdown sequence logic
  const dropdowns = [
    document.getElementById("version"),
    document.getElementById("bp-type"),
    document.getElementById("bp-name"),
    document.getElementById("automation"),
    document.getElementById("iteration"),
    document.getElementById("result-type")
  ];

  dropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener("focus", () => {
      // If previous dropdown not selected, show error
      if (index > 0) {
        const prev = dropdowns[index - 1];
        if (!prev.value) {
          const error = dropdown.parentElement.querySelector(".error-message");
          if (error) error.style.display = "block";
          dropdown.blur(); // prevent interaction
        }
      }
    });

    dropdown.addEventListener("change", () => {
      // Hide error when valid selection made
      const error = dropdown.parentElement.querySelector(".error-message");
      if (error) error.style.display = "none";

      // Enable next dropdown
      if (index < dropdowns.length - 1) {
        dropdowns[index + 1].disabled = false;
      }
    });
  });
});
