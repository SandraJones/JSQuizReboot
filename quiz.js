"use strict";
var populate = function (inventory) {
  // Loop over the inventory and populate the page
  
  let outputEl = document.getElementsByClassName("output")
    outputEl.innerHTML = "";
  for (var i = 0; i < CarLot.inventory.length; i++) {
  	 let inventoryCars = CarLot.getInventory();
  	 ouptutEl.innerHTML += `<div class="output" class="container"> + inventory[i].cars +
		</div>`;
  }
  // Now that the DOM is loaded, establish all 
  // the event listeners needed
}
// Load the inventory and send a callback 
// function to be invoked after the process is complete

CarLot.loadInventory(populate);

