
//System Mkulima for farmers and products input
class Mkulima {
  constructor() {
    this.farmz = [];
    this.groceryvendors = [];
    this.products = [];
    this.addFarm = (farmId, name, farmer, phone, address) => {
      this.farmz.push({farmId, name, farmer, phone, address});
    
  };
     this.removeFarm = (Id) => {
      let target = this.farmz.find(item => item.id === Id);
      let farmindex = this.farmz.indexOf(target);
      this.farmz.splice(farmindex, 1);
    };
    this.updateFarm = (oldId, newFarm, newName, newFarmer,newPhone,newAddress) => {
      let currentfarm = this.listoffarms.find(item => item.farmId === oldId);
      currentfarm.farmId = newFarm;
      currentfarm.name = newName;
      currentfarm.farmer = newFarmer;
      currentfarm.phone = newPhone;
      currentfarm.address = newAddress;
    }
    this.getFarm = (Id) => {
      console.log(this.farmz.find(item => item.farmId === Id));
    };
    this.addProduct = (productId, name, price) => {
      this.products.push({productId, name, price});
    
  };
  this.removeProduct = (productId) => {
    let target = this.products.find(item => item.id === productId);
    let farmindex = this.products.indexOf(target);
    this.products.splice(farmindex, 1);
  };
  this.updateProduct = (old,newproductId, newname, newprice) => {
    let currentproduct = this.products.find(item => item.productId === old);
    currentproduct.name = newname;
    currentproduct.productId = newproductId;
    currentproduct.price = newprice;
  }
  this.getProduct = (Id) => {
    console.log(this.products.find(item => item.productId === Id));
  };
   this.printProducts = () => {
    console.log(this.products)
   }
   this.calculateOrderCost = (productId,quantity) => {
      let target =  this.products.find(product => product.productId === productId);
         let total = target.price * quantity;
         return `The total cost of ${quantity} ${target.name} is ${total}`;
   }  
}
} 

  var farm =  new Mkulima();
  
  farm.updateFarm("Kanini", "12367890","beans", "Nancvida", "078976543" , "Karen");
  console.log(farm.farmz);
  farm.getFarm("56764537");
  farm.addProduct("0056","Tomatoes", 80)
  
  farm.addFarm("12367895", "berries", "Vida", "0706112100", "Umoja");
  farm.addFarm("23479090", "kiwi", "Popo", "0700000009", "Kinoo");
  
  farm.removeFarm("12567890");
  farm.removeProduct("0056")

  farm.updateProduct("1234","3214","beatroot", 200)
  farm.addProduct("2581","Potatoes",50)
  farm.getProduct("45678")
  farm.printProducts();

  console.log(farm.calculateOrderCost("2961", 55));
  console.log(farm.calculateOrderCost("5431", 60));

   

  