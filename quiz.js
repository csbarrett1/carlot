"use strict"

function populatePage (inventory) {
  var carList = document.getElementById("carList");

  for (let i = 0; i < inventory.length; i++) {
    carList.innerHTML += "<div class= 'col-xs-4'>" + "<div class='thumbnail' style='border: 1px solid " + inventory[i].borderColor + "; box-shadow: 0px 0px 20px " + inventory[i].borderColor + "'>" + "<img src=" + inventory[i].picture + ">" + "<div class='caption'>" + `<h3>${inventory[i].year}` + " " + `${inventory[i].make}` + " " + `${inventory[i].model}</h3>` + `<h5>${inventory[i].color}</h5>` + `<p>${inventory[i].description}</p>` + "</div>" + "</div>";
  };
  // Now that the DOM is loaded, establish all the event listeners needed
  // function activateEvents(inventory) {

  }

//   CarLot.activateEvents();
// }

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);