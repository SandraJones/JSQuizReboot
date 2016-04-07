"use strict";
let privateInventory = [];  	
     //build up DOM string
function buildCarDisplay() {
  console.log("buildCarDisplay");
  for (let i = 0; i < privateInventory.length; i++){
		let container = "";
    container[i].innerHTML += `<div class="output1 container row"><section class="col-xs-4 border">${privateInventory[i].make}${privateInventory[i].model}${privateInventory[i].year}${privateInventory[i].price}${privateInventory[i].color}${privateInventory[i].description}</section>    
    </div>`;
    console.log("container", container[i].innerHTML);
  }
}   
function removeSelected() {
  for (let i=0; i< privateInventory; i++) {
    privateInventory[i].classList.remove("selected");
    console.log("removeSelected", privateInventory);
  }
}
function keyEvent(currentCard, currentBio){
  input.addEventListener("keyup", function(event) {
    //if returns a boolean, so check if currentCard
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
function addClickEvent(privateInventory) {
  for (let i=0; i < privateInventory; i++){
    let currentCar = privateInventory[i].cars.make;
    let currentDescription = privateInventory[i].cars.description;
    console.log("currentCar", currentCar);
    currentCar.addEventListener("click", function(event) {
      removeSelected();
      input.value =  "";
      input.focus();
      currentCar.classList.add("selected")
      keyEvent(currentCar, currentDescription);
    })
  }
};
// Load the inventory and send a callback 
// function to be invoked after the process is complete
function populate(privateInventory) {
  console.log("privateInventory", privateInventory );
  // Loop over the inventory and populate the page
  let list = document.getElementsByClassName("output1");  
  for (let i = 0; i < privateInventory.length; i++) {
    let currentCar = privateInventory[i];
    buildCarDisplay(privateInventory);
  }   
  addClickEvent();
}    
   
CarLot.loadInventory(populate);
