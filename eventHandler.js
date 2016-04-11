"use strict";
var CarLot = (function(oldCarLot) {
	var privateInventory = CarLot.cars
	//line2 is working
	for (var i = 0; privateInventory.length; i++) {
		console.log("loop is working");
		 privateInventory[i].cars.color = color1;
		 oldCarLot.changeBorder = function() {
		 	console.log("changeBorderfunction");
		    document.getElementById("outputTarget").border = "thin solid color1";   
				border.addEventListener("click", function(event) {
				}); 
			};
		  oldCarLot.changeColor = function() {
		  	console.log("changeColorfunction");
		  	document.getElementById("output1").style.background = grey;
		    border.addEventListener("click", function(event)  {
		    });  
  		};
  return oldCarLot;
	}
})(CarLot);
//chg:  output1 chgd to outputTarget