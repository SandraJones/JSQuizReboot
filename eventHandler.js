"use strict";
var CarLot = (function(oldCarLot) {
	var privateInventory = CarLot.getInventory();
	//above works
	 oldCarLot.changeBorder = function(color1) {
	 	console.log("changeBorderfunction");
	    document.getElementById("outputTarget").style.border = "thin solid red";   		
		};
	  oldCarLot.changeColor = function() {
	  	console.log("changeColorfunction");
	  	document.getElementById("outputTarget").style.background = "grey";
	    border.addEventListener("click", function(event)  {
	    });  
		}
		oldCarLot.editDescription = function() {
			console.log("changeDescription");
		}	
	return oldCarLot;
})(CarLot);
