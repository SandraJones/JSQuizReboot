"use strict";
var CarLot = (function(inventory) {
		function populate(inventory) {
		  // Loop over the inventory and populate the page
		  var list = document.getElementsByClassName("output");
		  var outputString = "";
		  for (var i = 0; i < CarLot.inventory.length; i++) {
		  	 var currentCar = CarLot.getInventory();
		  	 //build up DOM string
		  	 outputString += `<div class="row">
          <div class="col-xs-4"><h1>${currentInventory.make}</h1>
  	<h2>${currentInventory.model}</h2><h3>${currentInventory.year}</h3>${currentInventory.price}</h3><h4>${currentInventory.color}</h4>
  	<h5>${currentInventory.purchased}</h5><h6>${currentInventory.description}</h6></div>;
          </div>`;
          // <div class="output" class="container"> + inventory[i].cars + </div>`;
		  list.innerHTML += outputString; 
		  }
		  // Now that the DOM is loaded, establish all 
		  // the event listeners needed
		}
		// Load the inventory and send a callback 
		// function to be invoked after the process is complete
   return inventory;
})(CarLot);
