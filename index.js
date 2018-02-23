// Get references to the tbody element and button for loading additional results
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the $searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAliens to aliensData initially
var filteredAliens = aliensData;

// Set starting index and results per page
var startingIndex = 0;
var resultsPerPage = 1000;
// Rendering table
renderTable();



// renderTable renders the filteredAliens to the tbody
function renderTable() {
  // Set the value of ending index
  var endingIndex = startingIndex + resultsPerPage;

  $tbody.innerHTML = "";
    // Set the value of ending index
  for (var i = 0; i < filteredAliens.length; i++) {
    // Get the current address object and its fields
    var alien = filteredAliens[i];
    var fields = Object.keys(alien);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell and set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = alien[field];
    };
  };
};


// Function to filter date
function filterDate(aliens) {
  return aliens.datetime == $dateInput.value.trim().toLowerCase();
};

// Function to filter city
function filterCity(aliens) {
  return aliens.city == $cityInput.value.trim().toLowerCase();
};

// Function to filter state
function filterState(aliens) {
  return aliens.state == $stateInput.value.trim().toLowerCase();
};

// Function to filter country
function filterCountry(aliens) {
  return aliens.country == $countryInput.value.trim().toLowerCase();
};

// Function to filter shape
function filterShape(aliens) {
  return aliens.shape == $shapeInput.value.trim().toLowerCase();
};

// Function to filter input
function handleSearchButtonClick(event) {

  // Prevent default
  event.preventDefault();

  // Reseting data set each time button is clicked
  filteredAliens = aliensData;

  // Filters
  if ($dateInput.value) {
      filteredAliens = filteredAliens.filter(filterDate);
  };

  if ($cityInput.value) {
      filteredAliens = filteredAliens.filter(filterCity);
  };

  if ($stateInput.value) {
      filteredAliens = filteredAliens.filter(filterState);
  };

  if ($countryInput.value) {
      filteredAliens = filteredAliens.filter(filterCountry);
  };

  if ($shapeInput.value) {
      filteredAliens = filteredAliens.filter(filterShape);
  };

  if (!$dateInput && !$cityInput && !$stateInput && !$countryInput && !$shapeInput) {
      filteredAliens = aliensData;
  };

  // Reset inputs
  $dateInput.value = "";
  $cityInput.value = "";
  $stateInput.value = "";
  $countryInput.value = "";
  $shapeInput.value = "";

  // Re-render table
  $tbody.innerHTML = "";
  renderTable();
};
