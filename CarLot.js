"use strict";
var CarLot = (function () {
  var privateInventory = [];

  return {
    getInventory: function () {
      return privateInventory;
       console.log("inventory");
    }, 
    loadInventory: function(callbackFunction) {
      var invLoader = new XMLHttpRequest();
      invLoader.addEventListener("load", function () {
				//set the value of the private array
				  privateInventory = JSON.parse(this.responseText).inventory;
      	  
      	  callbackFunction(privateInventory);
      	});
    	
	      invLoader.open("GET", "inventory.json");
	      invLoader.send();
   }
  } 
})();
// CarLot.loadInventory();
