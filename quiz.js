"use strict";
var CarLot = (function(oldCarLot) {
  var outputTarget = document.getElementById("outputTarget"); 	

  oldCarLot.removeSelected = function() {
    for (let i=0; i < privateInventory; i++) {
      privateInventory[i].classList.remove("selected");
      console.log("removeSelected", privateInventory);
    }
  }
  oldCarLot.keyEvent = function (currentCar, currentDescription){
    input.addEventListener("keyup", function(event) {
      //if returns a boolean, so check if currentCar
      if (currentCar.classList.contains("selected")) {
        let newDescription = event.currentTarget.value;
        currentDescription.innerHTML = newDescription; 
        if (event.keyCode === 13) {
           currentDescription.innerHTML = newDescription;
           input.value = "";
        }   
      }
      console.log("keyEvent");
    });
  }
    // Now that the DOM is loaded, establish all 
    // the event listeners needed
  oldCarLot.addClickEvent = function (privateInventory) {
    for (let i=0; i < privateInventory; i++){
      let currentCar = privateInventory[i].cars.make;
      let currentDescription = privateInventory[i].cars.description;
      console.log("currentCar", currentCar);
      currentCar.addEventListener("click", function(event) {
        //call removeSelected()
        removeSelected();
        input.value =  "";
        input.focus();
        currentCar.classList.add("selected");
        //call keyevent()
        keyEvent(currentCar, currentDescription);
      });
    }
  }
       //build up DOM string
  oldCarLot.buildCarDisplay = function(privateInventory) {
    for (let i = 0; i < privateInventory.length; i++){
      outputTarget.innerHTML += `<div><section class="col-xs-4 border" style = " border: 1px solid ${privateInventory[i].color}">${privateInventory[i].make}
      ${privateInventory[i].model}${privateInventory[i].year}${privateInventory[i].price}${privateInventory[i].color}${privateInventory[i].description}</section></div>`;
       console.log("privateInventory", privateInventory);
       var currCarColor = privateInventory[i].color
    }
    CarLot.addClickEvent();
  } 
   return oldCarLot;
})(CarLot);
 CarLot.loadInventory(CarLot.buildCarDisplay);