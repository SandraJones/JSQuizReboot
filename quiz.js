var privateInventory = [];  	
     //build up DOM string
function buildCarDisplay() {
		container.innerHTML += `<div class="output1 container row"><section class="col-xs-4" class = "border">${privateInventory.make}${privateInventory.model}${privateInventory.year}${privateInventory.price}${privateInventory.color}${privateInventory.description}</section>    
    </div>`;
   }   
  // Now that the DOM is loaded, establish all 
  // the event listeners needed

function addClickEvent(privateInventory) {
  for (let i=0; i < privateInventory; i++){
    let currentCar = privateInventory.car[i].make.model;
    let currentDescription = privateInventory.car[i].description;
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
  var list = document.getElementsByClassName("output1");
  
  for (var i = 0; i < privateInventory.length; i++) {
    var currentCar = privateInventory[i];
    buildCarDisplay(privateInventory);
  }   
  addClickEvent();
}    
   
CarLot.loadInventory(populate);
