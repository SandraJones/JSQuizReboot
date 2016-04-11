"use strict";
var CarLot = (function(oldCarLot) {
	var privateInventory = CarLot.getInventory();
	console.log("privateInventory", privateInventory);
	//line2 is working
	
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
	return oldCarLot;
})(CarLot);
//chg:  output1 chgd to outputTarget