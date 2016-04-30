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
        // input.value =  "";
        // input.focus();
        currentCar.classList.add("selected");
        //call keyevent()
        keyEvent(currentCar, currentDescription);
      });
    };
  };

       //build up DOM string
  oldCarLot.buildCarDisplay = function(privateInventory) {
    for (let i = 0; i < privateInventory.length; i++){
      outputTarget.innerHTML += `<div><section id="id${i}" class="col-xs-4 border card ${privateInventory[i].color}"><p>${privateInventory[i].make}</p>
      <p>${privateInventory[i].model}</p><p>${privateInventory[i].year}</p><p>${privateInventory[i].price}</p><p>${privateInventory[i].color}</p><span>${privateInventory[i].description}</span></section></div>`;
  
       var currCarColor = privateInventory[i].color
    };

    CarLot.addClickEvent();
    
  };

   return oldCarLot;

})(CarLot);
 CarLot.loadInventory(CarLot.buildCarDisplay);