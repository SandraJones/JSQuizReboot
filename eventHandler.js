"use strict";
//beginning of iife structure 
var CarLot = (function(oldCarLot) {

	var privateInventory = CarLot.getInventory();
	var card = document.getElementsByClassName("card");   
	var classId = "";
	var clickedThings = document.getElementsByClassName("selected")
	var input = document.getElementById("inputSpot");

//listener for first click on a car
	oldCarLot.addClickEvent = function() {
		for (var i=0; i<card.length; i++) {
				 var currentClass =  card[i];
				 currentClass.addEventListener("click", CarLot.cardClicked);
		};
	};

	oldCarLot.removeStyling = function(){
		for (var i=0; i<card.length; i++){
			//removes the class of the card that was selected previously
			card[i].classList.remove("fatBorder");

		};
	};

//function clears input area, focuses on input area and 
//targets the card so that we can call the change border 
//and edit function
	oldCarLot.cardClicked = function(){
		oldCarLot.removeStyling();
		input.value =  "";
    input.focus();
		var clickedClass = event.target.closest('section');
		classId = clickedClass.getAttribute("id");
		if (clickedThings.length !== 0) {
				clickedClass.classList.remove("fatBorder");
				clickedClass.classList.add("fatBorder");
			}
		else {
				clickedClass.classList.add("fatBorder");
			}
			//calls the function that changes the border from normal to thicker
		oldCarLot.chgBorderEvent(clickedClass);	
    oldCarLot.editor(clickedClass);
	};

	//allows editing of the selected car's description
	oldCarLot.editor = function(classId){
	  let currentDescr = classId.lastElementChild;
	  inputSpot.addEventListener("keyup", function() {
  	let newDescr = inputSpot.value;
		  currentDescr.innerHTML = newDescr;
		    if (event.keyCode === 13) {
		       input.value = "";
		       currentDescr = "";
	    	};     	
	 	 });
	};
	//allows us to change from normal to thick border
	oldCarLot.chgBorderEvent = function(classId) {
		classId.classList.add("fatBorder");
	};	
	
	return oldCarLot;

})(CarLot);