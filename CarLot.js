"use strict"

// Create one global variable (e.g. CarLot) and use the IIFE pattern to augment it two times in separate JavaScript files.

var CarLot = (function (cars) {
  var inventory = [];

// Use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.
  return {

// The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a private variable.

    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars;

        callback(inventory);

      });
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
    }
  };
})(CarLot || {});
