// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // Use Day.js to get the current date and display it in the header
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  // Add time blocks from 9am to 5pm to the calendar
  for (var hour = 9; hour <= 17; hour++) {
    // Create a row element to hold the time block
    var $row = $("<div>").addClass("row time-block");
    // Create a column to display the hour
    var $hour = $("<div>").addClass("col-1 hour").text(dayjs().hour(hour).format("h A"));
    // Create a column to hold the description
    var $description = $("<textarea>").addClass("col-10 textarea");
    // Set the id of the description column to "hour-x" where x is the hour
    $description.attr("id", "hour-" + hour);
    // TODO: Use the id of the description column to get the description from local storage
    // and set the value of the description column to the description from local storage
    
    // Create a column to hold the save button
    var $saveBtn = $("<button>").addClass("col-1 saveBtn");
    // Create an icon to display in the save button
    var $saveIcon = $("<i>").addClass("fas fa-save");
    // Add the icon to the save button
    $saveBtn.append($saveIcon);
    // Add the hour, description, and save button to the row
    $row.append($hour, $description, $saveBtn);
    // Add the row to the container
    $(".container").append($row);
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
