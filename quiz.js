"use strict"

function populatePage (inventory) {
  var carList = document.getElementById("carList");

  for (let i = 0; i < inventory.length; i++) {
    carList.innerHTML += "<div class= 'col-xs-4'>" + "<div class='thumbnail' style='border-color: " + inventory[i].borderColor + "; box-shadow: 0px 0px 20px " + inventory[i].borderColor + "'>" + "<img src=" + inventory[i].picture + ">" + `<h3>${inventory[i].year}` + " " + `${inventory[i].make}` + " " + `${inventory[i].model}</h3>` + `<h5>${inventory[i].color}</h5>` + `<p>${inventory[i].description}</p>`  + "</div>";
  };
  // Now that the DOM is loaded, establish all the event listeners needed
  // function activateEvents(inventory) {

  }

// function activateEvents (inventory) {
//   var input = document.getElementById("userInput");
//   var carList = document.getElementById("carList");
//   var childrenEl = carList.childNodes;
//   for (let i = 0; i < inventory.length; i++) {
//     childrenEl[i].addEventListener("click", function(event) {
//       var childEl = event.target.closest("div");
//       childEl.classList.add("border");
//       childEl.classList.add("background")

//       document.forms["form"].elements["userInput"].focus();
//       description(childEl.childNodes[3]);
//     })
//   };

//   function description(swap) {
//     input.addEventListener("keyup", function(event) {
//       var text = input.value;
//       swap.innerHTML = text;
//     })
//   };
// };
//   CarLot.activateEvents();
// }

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);
// CarLot.loadInventory(activateEvents);