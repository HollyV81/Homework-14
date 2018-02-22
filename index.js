// Get references to the tbody element and button for loading additional results
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");



// Set filteredAliens to aliensData initially
var filteredAliens = aliensData;

// Set starting index and results per page
var startingIndex = 0;
var resultsPerPage = 1000;

// Rendering table
renderTable();

// Add an event listener to the $searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// renderTable renders the filteredAliens to the tbody
function renderTable() {

    // Set the value of ending index
    var endingIndex = startingIndex + resultsPerPage;

  for (var i = 0; i < filteredAliens.length; i++) {
    // Get the current address object and its fields
    var data = filteredAliens[i];
    var fields = Object.keys(data);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell and set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = data[field];
    };
  };
};


// Function to filter date
function filterDate(alien) {
  return alien.datetime == $date.value.trim().toLowerCase();
};

// Function to filter city
function filterCity(alien) {
  return alien.city == $city.value.trim().toLowerCase();
};

// Function to filter state
function filterState(alien) {
  return alien.state == $state.value.trim().toLowerCase();
};

// Function to filter country
function filterCountry(alien) {
  return alien.country == $country.value.trim().toLowerCase();
};

// Function to filter shape
function filterShape(alien) {
  return alien.shape == $shape.value.trim().toLowerCase();
};


function handleSearchButtonClick(event) {
    event.preventDefault();
    // Reseting data set each time button is clicked
    filteredAliens = aliensData;
    // Filters
    if ($dateInput.value) {
      filteredAliens = filteredAliens.filter(filterDate);
     };

    if ($cityInput.value) {
      filteredSightings = filteredSightings.filter(filterCity);
    };

    if ($stateInput.value) {
      filteredSightings = filteredSightings.filter(filterState);
    };

    if ($countryInput.value) {
      filteredSightings = filteredSightings.filter(filterCountry);
    };

    if ($shapeInput.value) {
      filteredSightings = filteredSightings.filter(filterShape);
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


