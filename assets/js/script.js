// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Use Day.js to get the current date and display it in the header
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  // Apply the past, present, or future class to each time block by comparing the id to the current hour
  var currentHour = dayjs().hour();
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id"));
    if (blockHour === currentHour) {
      // Apply present class
      $(this).addClass("present");
    } else  if (blockHour < currentHour) {
      // Apply past class
      $(this).removeClass("present");
      $(this).addClass("past");
    } else {
      // Apply future class
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });

   // Add save button event listener
   $(".saveBtn").on("click", function () {
    // Get the id of the time-block containing the button that was clicked
    var timeBlockId = $(this).siblings(".time-block").attr("id");
    // Get the description from the textarea in the time-block
    var description = $(this).siblings(".description").val();
    // Save the description in local storage using the time-block id as the key
    localStorage.setItem(timeBlockId, description);
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
});
