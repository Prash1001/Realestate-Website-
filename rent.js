function showDatePicker() {
    var container = document.getElementById("datepicker-container");
    container.innerHTML = ""; // Clear any existing content
  
    // Create the datepicker element
    var datepicker = document.createElement("input");
    datepicker.type = "date";
  
    // Set the attributes and event listeners
    datepicker.id = "datepicker";
    datepicker.className = "datepicker";
    datepicker.addEventListener("change", handleDateSelection);
  
    // Append the datepicker to the container
    container.appendChild(datepicker);
  }
  
  function handleDateSelection(event) {
    var selectedDate = event.target.value;
    // Do something with the selected date
  }

  document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Perform your desired actions here
  });
  
  
  document.getElementById("search-button").addEventListener("click", function() {
    document.getElementById("search-form").submit();
  });
  // Get all the dropdown toggles
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// Add a click event listener to each dropdown toggle
dropdownToggles.forEach((toggle) => {
toggle.addEventListener('click', () => {
// Get the corresponding dropdown menu
const dropdownMenu = toggle.nextElementSibling;

// Close all other dropdown menus
dropdownToggles.forEach((otherToggle) => {
if (otherToggle !== toggle) {
const otherDropdownMenu = otherToggle.nextElementSibling;
otherDropdownMenu.classList.remove('open');
}
});

// Toggle the display of the clicked dropdown menu
dropdownMenu.classList.toggle('open');
});
});

const minDropdown = document.querySelector('.min-dropdown');
const maxDropdown = document.querySelector('.max-dropdown');

minDropdown.addEventListener('change', () => {
  const selectedMinValue = parseFloat(minDropdown.value);
  updateMaxDropdown(selectedMinValue);
});

function updateMaxDropdown(selectedMinValue) {
  maxDropdown.innerHTML = '';

  if (isNaN(selectedMinValue)) {
    maxDropdown.innerHTML = '<option value="more">Max:</option>';
    return;
  }

  const maxOptions = [1.2, 1.4, 1.6, 1.8, 2, 2.5, 3, 3.5];

  maxOptions.forEach(optionValue => {
    if (optionValue > selectedMinValue) {
      const option = document.createElement('option');
      option.value = optionValue.toFixed(1);
      option.text = optionValue.toFixed(1);
      maxDropdown.appendChild(option);
    }
  });
}
