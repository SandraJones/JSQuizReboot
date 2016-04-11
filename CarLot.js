var CarLot = (function(){
  var privateInventory = [];

  return {
    loadInventory: function (callBack) {
      var invLoader = new XMLHttpRequest();
        invLoader.open("GET", "inventory.json");
        invLoader.send();
        invLoader.addEventListener("load", function () {
        //set the value of the private array
          privateInventory = JSON.parse(this.responseText).cars;
          console.log("privateInventory", privateInventory);
        callBack(privateInventory);
        });
    }
  }; 
})();
    // getInventory: function () {
    //   return privateInventory;
    //    console.log("inventory");
    // }, 