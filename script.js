const versionSelect = document.getElementById('versions');
const blueprintSelect = document.getElementById('blueprint');
const blueprintNameSelect = document.getElementById('blueprintName');
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

const typeError = document.getElementById('typeError');
const nameError = document.getElementById('nameError');

// Enable Type only after Version is chosen
versionSelect.addEventListener('change', function() {
  if (this.value) {
    blueprintSelect.disabled = false;
    typeError.style.display = "none";
  } else {
    blueprintSelect.disabled = true;
    blueprintNameSelect.disabled = true;
  }
});

// Enable Name only after Type is chosen
blueprintSelect.addEventListener('change', function() {
  if (this.value) {
    blueprintNameSelect.disabled = false;
    nameError.style.display = "none";
    blueprintNameSelect.innerHTML = '<option value="">--Select--</option>';

    if (this.value === 'foundation-lite') {
      blueprintNameSelect.innerHTML += '<option value="bp-small">BP-Small</option>';
    }
  } else {
    blueprintNameSelect.disabled = true;
  }
});

// Show inline error if user clicks disabled dropdown
blueprintSelect.addEventListener('mousedown', function(e) {
  if (this.disabled) {
    e.preventDefault();
    typeError.style.display = "block";
  }
});

blueprintNameSelect.addEventListener('mousedown', function(e) {
  if (this.disabled) {
    e.preventDefault();
    nameError.style.display = "block";
  }
});

// Toggle dark/light mode
modeToggle.addEventListener('click', function() {
  body.classList.toggle('light-mode');
  modeToggle.textContent = body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
});

// Example: dynamically add new iteration
const iterationSelect = document.getElementById('iteration');
let currentIteration = 3;
function addIteration() {
  currentIteration++;
  const option = document.createElement('option');
  option.value = currentIteration;
  option.textContent = currentIteration;
  iterationSelect.appendChild(option);
}
// Simulate automation adding iteration after 5s
setTimeout(addIteration, 5000);
