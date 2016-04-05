"use strict"

var CarLot = (function (cars) {

// One function resets the border thickness and background color for each car element back to the original values

  function reset (inventory) {
    var button = document.getElementById("button");
    var info = document.getElementsByClassName("info");


    button.addEventListener("click", function (event) {
      for (let i = 0; i < inventory.length; i++) {
        info[i].classList.remove("border");
        info[i].classList.remove("background");
      }
    })
  }
  CarLot.loadInventory(reset);
  return cars;
}( CarLot || {} ));