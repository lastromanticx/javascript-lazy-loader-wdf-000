"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

var cars_count = 6

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
  
  var html = '<div class="row">';

  $.each(carsJSON,function(index,car){
    html += '<div class="col-md-4 car">'
          + '<h2>' + car.Make  + '</h2>'
          + '<p><strong>Model:</strong> ' + car.Model  + '</p>'
          + '<p><strong>Year:</strong> ' + car.Year + '</p></div>'
  });

  html += '</div>';

  return html
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"

  var html = formatCars(carsJSON);

  $('#cars').append(html);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  
  var next_3 = '' + (cars_count/3 + 1) + '/3'

  $.ajax({
    dataType: "jsonp",
    url: baseUrl + next_3,
    success: function(data){
      addCarsToDOM(data);
      cars_count += 3;
    }
  });
}
