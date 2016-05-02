"use strict";
var CarLot = (function(oldCarLot) {
	var privateInventory = CarLot.getInventory();
	var card = document.getElementsByClassName("card");   
	var classId = "";
	var clickedThings = document.getElementsByClassName("selected")
	var input = document.getElementById("inputSpot");

	oldCarLot.addClickEvent = function() {
		for (var i=0; i<card.length; i++) {
				 var currentClass =  card[i];
				 currentClass.addEventListener("click", CarLot.markClicked);
		};
	};

	oldCarLot.removeStyling = function(){
		console.log("2	removeStyling fired");
		for (var i=0; i<card.length; i++){
			console.log("3	card i ", card[i]);
			//removes the class of the card that was selected previously
			card[i].classList.remove("fatBorder");
			console.log("4 card i ", card[i]);

		};
	};

	oldCarLot.markClicked = function(){
		console.log("1 markClicked");
		oldCarLot.removeStyling();
		input.value =  "";
		console.log("5", input.value);
    input.focus();
		var clickedClass = event.target.closest('section');
		console.log("6 clickedClass", clickedClass);
		classId = clickedClass.getAttribute("id");
		console.log("7 classId", classId);
//try using fatBorder in place of "selected" on lines 39, 41, 44
		if (clickedThings.length !== 0) {
				clickedClass.classList.remove("fatBorder");
				console.log("	8 clicked", clickedClass[0]);
				clickedClass.classList.add("fatBorder");
			}
		else {
				clickedClass.classList.add("fatBorder");
			}
		oldCarLot.chgBorderEvent(clickedClass);	
    oldCarLot.editor(clickedClass);
	};


	oldCarLot.editor = function(classId){
	  let currentDescr = classId.lastElementChild;
	  	console.log(currentDescr);	
	  inputSpot.addEventListener("keyup", function() {
  	let newDescr = inputSpot.value;
  		console.log("	new", newDescr);
		  currentDescr.innerHTML = newDescr;
		    if (event.keyCode === 13) {
		       input.value = "";
		       currentDescr = "";
	    	};     	
	 	 });
	};

	oldCarLot.chgBorderEvent = function(classId) {
		classId.classList.add("fatBorder");
	};	
	
	return oldCarLot;

})(CarLot);