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

  // Loop through each time-block and load the description from local storage if it exists
  $(".time-block").each(function () {
    // Get the id of the time-block
    var timeBlockId = $(this).attr("id");
    // Get the description from local storage using the time-block id as the key
    var description = localStorage.getItem(timeBlockId);
    // Set the value of the textarea in the time-block
    $(this).val(description);
  });

  // add save all button to bootom of page
  var saveAllBtn = $("<button>");
  saveAllBtn.addClass("saveAllBtn");
  saveAllBtn.text("Save All");
  $(".container").append(saveAllBtn);

  // save all button event listener
  $(".saveAllBtn").on("click", function () {
    // Loop through each time-block
    $(".time-block").each(function () {
      // Get the id of the time-block
      var timeBlockId = $(this).attr("id");
      // Get the description from the textarea in the time-block
      var description = $(this).val();
      // Save the description in local storage using the time-block id as the key
      localStorage.setItem(timeBlockId, description);
    });
  });

  // add clear button to bottom of page
  var clearBtn = $("<button>");
  clearBtn.addClass("clearBtn");
  clearBtn.text("Clear Schedule");
  $(".container").append(clearBtn);
  
  // clear the user input from local storage when the user clicks the clear button
  $(".clearBtn").on("click", function () {
  // Clear the description from local storage
  localStorage.clear();
  // Reload the page
  location.reload();
  });
  
});
