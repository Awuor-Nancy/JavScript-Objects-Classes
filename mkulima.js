class Mkulima {
    constructor() {
        this.groceryvendors = [];
        this.products = [];
        this.farmz = [];
      
      this.addFarm = (farmId, name, farmer, phone, address) => {
        this.farmz.push({farmId, name, farmer, phone, address});
      
    };
       this.removeFarm = (Id) => {
        let item = this.farmz.find(item => item.id === Id);
        let numberIndex = this.farmz.indexOf(item);
        this.farmz.splice(numberIndex, 4);
      };
      this.updateFarm = (oldId, newFarm, newName, newFarmer,newPhone,newAddress) => {
        let currentfarm = this.farmz.find(item => item.farmId === oldId);
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
      let item = this.products.find(item => item.id === productId);
      let numberIndex = this.products.indexOf(item);
      this.products.splice(numberIndex, 3);
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
           return `The sum of products is ${quantity} ${target.name} is ${total}`;
     }
    
  }
}

let shamba = new Mkulima();

shamba.addFarm("36789067", "guava", "lency", "0742507533", "upperhill");
shamba.addFarm("56764537", "Lola", "gumba","0706112100", "Lavi");
shamba.addFarm("12567890","Maize","Edrian", "0719698792", "runda");
shamba.addFarm("26789354","pawpaw", "Vincent", "0011273738" , "Kahawa");

shamba.addProduct("1234","spinach", 105)
shamba.addProduct("45678","beans", 550)
shamba.addProduct("6789","", 400)

shamba.removeProduct("6789")
shamba.updateProduct("1234","3214","Onions", 500)
shamba.addProduct("2581","brocolli", 90)

shamba.getProduct("45678")
shamba.printProducts();
console.log(shamba.calculateOrderCost("2581", 127));
console.log(shamba.calculateOrderCost("3214", 90));

shamba.removeFarm("12567890");
shamba.removeFarm("26789354");
shamba.updateFarm("36789067", "12367890","broccoli", "nancvida", "078976543" , "Kisumu");

console.log(shamba.farmz);
shamba.getFarm("56764537");
