"use strict";

$(document).ready(function() {
  // add click listener here
  // it should call on fetchJSON()

  var cars_count = 6;

  $('#load-cars').on('click', function(){
    fetchJSON();
  });
});
