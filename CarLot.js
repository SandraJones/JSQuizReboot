var CarLot = (function(){
  var privateInventory = [];

  return {
    getInventory: function () {
      return privateInventory;
    }, 
    //loading the object 
    loadInventory: function (callBack) {
      var invLoader = new XMLHttpRequest();
        invLoader.open("GET", "inventory.json");
        invLoader.send();
        invLoader.addEventListener("load", function () {
        //set the value of the private array
          privateInventory = JSON.parse(this.responseText).cars;
        callBack(privateInventory);
        });
    }
  }; 
})();