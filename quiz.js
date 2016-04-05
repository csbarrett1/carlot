"use strict"

var CarLot = (function (cars) {

  // Loop over your array of cars and build up an HTML string to build a card for each car.
  // Use Bootstrap to create rows. Each row should contain 3 columns.
  // Display all properties of the car in the DOM.
  // Put a border around the car information that matches the color of the car.

  function populatePage (inventory) {
    for (let i = 0; i < inventory.length; i++) {
      carList.innerHTML += "<div class= 'col-xs-4'>" + "<div class='thumbnail'>" + "<img src=" + inventory[i].picture + ">" + "<div  class='info thinBorder' style= 'height: 190px; padding: 5px; margin-top: 5px; border-radius: 5px; border-color: " + inventory[i].borderColor + "'>" + `<h3 style='margin-top: 0px'> ${inventory[i].year}` + " " + inventory[i].make + " " + `${inventory[i].model}</h3>` + `<h5>${inventory[i].color}</h5>` + `<p>${inventory[i].description}</p>` + "</div>" + "</div>" + "</div>";
      };
  CarLot.loadInventory(activateEvents);
    }

  // Now that the DOM is loaded, establish all the event listeners needed
  // The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application.

  function activateEvents (inventory) {
    var input = document.getElementById("userInput");
    var info = document.getElementsByClassName("info");
    var childrenEl = info.childNodes;
    var childEl;

  // When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.

    for (let i = 0; i < inventory.length; i++) {
      info[i].addEventListener("click", function(event) {
        childEl = event.target.closest("div");
        childEl.classList.toggle("border");
        childEl.classList.add("background");

  // On click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input

        input.value = "";
        input.focus();
        description(childEl.childNodes[2]);
      })
    };

  // When you start typing into the navbar's text input, the description of the currently selected car should be bound to what you are typing in and match it exactly.

    function description(swap) {
      input.addEventListener("keyup", function(event) {
        var text = input.value;
        swap.innerHTML = text;
      });
    }
  }

  // Load the inventory and send a callback function to be invoked after the process is complete

  CarLot.loadInventory(populatePage);
  return cars;
}( CarLot || {} ));