
//Assignment 2
const kiosks = [
  {name: "kiwi", price: 30.00, quantity: 3},
  {name: "apples", price: 40.00, quantity: 6},
  {name: "grapes", price: 50.00, quantity: 2}

];
      //Number1
let kiosk = {
        // name:"kiwi",
         price: 25.00,
        calculateFruitCost: function (fruitName, quantity) {
      return `5 ${fruitName} for Ksh ${this.price * quantity}`; 
          }
      }
      console.log(kiosk.calculateFruitCost("kiwi", 5));
      
      
      // number2
      class KioskCalc{
          constructor(fruitName,quantity,fruitsPriceList){ 
          this.fruitName =fruitName;
          this.quantity = quantity;
          this.fruitsPriceList = {
              "guava": 30,
              "apple": 15,
              "grapes": 40 
          },
          this.getTotalCost = function(){
            return `5 ${this.fruitName} for Ksh ${this.quantity * this.fruitsPriceList.grapes}`
 
        }
      }
      }     
      var kioskCalc = new KioskCalc("grape", 7)
      console.log(kioskCalc.getTotalCost())
      


