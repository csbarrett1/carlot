"use strict"

var CarLot = (function() {

  // Loop over your array of cars and build up an HTML string to build a card for each car.
  // Use Bootstrap to create rows. Each row should contain 3 columns.
  // Display all properties of the car in the DOM.
  // Put a border around the car information that matches the color of the car.

  function populatePage (inventory) {
    for (let i = 0; i < inventory.length; i++) {
      carList.innerHTML += "<div class= 'col-xs-4'>" + "<div class='thumbnail'>" + "<img src=" + inventory[i].picture + ">" + "<article  class='info normalState' style= 'height: 190px; padding: 5px; margin-top: 5px; border-radius: 5px; border-color: " + inventory[i].borderColor + "'>" + `<h3 style='margin-top: 0px'> ${inventory[i].year}` + " " + inventory[i].make + " " + `${inventory[i].model}</h3>` + `<h5>${inventory[i].color}</h5>` + `<p class="description" id="card-${i}">${inventory[i].description}</p>` + "</article>" + "</div>" + "</div>";
      };
  CarLot.loadInventory(activateEvents);
  CarLot.loadInventory(reset);
    }

  // Now that the DOM is loaded, establish all the event listeners needed
  // The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application.
  // When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.

  function activateEvents (inventory) {
    var info = document.getElementsByClassName("info");

    $(document).on("click", function(event) {
      var clickedOn = $("article");
      clickedOn.removeClass("clickedOn");
      $(event.target).closest("article").addClass("clickedOn");
      $("input").focus();
      var rando =  $(event.target).closest("p").attr('id');
      description();
    });
  }


  // // On click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input
  // When you start typing into the navbar's text input, the description of the currently selected car should be bound to what you are typing in and match it exactly.

  function description() {
   $("input").keyup(function() {
      var inputStuff = $("input").val();
      $(".clickedOn").html(inputStuff);
    });
    $("input").val("");
  }

// One function resets the border thickness and background color for each car element back to the original values

  function reset (inventory) {
    var button = document.getElementById("button");
    var info = document.getElementsByClassName("info");

    $("#button").on("click", function(event) {
      location.reload();
    })
  }

  // Load the inventory and send a callback function to be invoked after the process is complete

  CarLot.loadInventory(populatePage);
  return cars;
}( CarLot || {} ));