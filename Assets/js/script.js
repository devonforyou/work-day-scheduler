// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html 
$(document).ready(function(){
  $(function () { 

 
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    $('.saveBtn').click(function() {
      var description = $(this).siblings('.description'). val();
      var hour = $(this).parent().attr('id');
      localStorage.setItem(hour, description);
    });
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    setInterval(function() {
      $(".time-block").each(function() {
        var time = $(this).attr('id');
        var timeNow = dayjs().hour()
        $(this).removeClass('past present future');
        if(timeNow > time) {
          $(this).addClass('past');
         } else if(timeNow < time) {
          $(this).addClass('future');
         } else {
          $(this).addClass('present');
         }
        });
    }, 1000);
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this? 
    $('.time-block').each(function() {
      var text = $(this).attr('id');
      var description = localStorage.getItem(text);
      $(this).find('.description').val(description);
    });
    // TODO: Add code to display the current date in the header of the page.
    setInterval(function() {
      $('#currentDay').text(dayjs().format('MMM D, YYYY'))
    });
  });
  });

