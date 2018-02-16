// Get references to the tbody element and button for loading additional results
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the $searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to addressData initially
var filteredAliens = aliensData;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
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
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = $dateInput.value.trim().toLowerCase();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterState = $stateInput.value.trim().toLowerCase();
 

  // Set filteredAddresses to an array of all addresses who's "state" matches the filter
  filteredAliens = aliensData.filter(function(filterby) {
    var filterbyDate = filterby.date.substring(0, filterDate.length).toLowerCase();
    var filterbyState = filterby.state.substring(0, filterState.length).toLowerCase();
    var filterbyCity = filterby.city.substring(0, filterCity.length).toLowerCase();
    if (filterbyState === filterState && filterbyCity === filterCity) {
      return true;
    }
    return false;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();
