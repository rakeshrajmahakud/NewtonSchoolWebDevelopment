// // ex:1///////
// const Product1 = class Product {
    //     constructor(itemName,price,discount,productCode){
        //         this.itemName = itemName;
        //         this.price = price;
        //         this.discount = discount;
        //         this.productCode = productCode;
        //     }
        
        //     get getDiscount(){    // at the time of calling dont use parenthesis
        //         return this.discount;
        //     };
        //    set setDiscount(value){    // at the time of calling dont use parenthesis
        //        this.discount = value;
        //   }
        
        //     discountValue(){
            //         return this.discount;
            //     }
            // }
            
            // let chair = new Product1('chair',400,15,'c10');
            
            // console.log(chair.getDiscount);   //15
            // console.log(chair.discountValue());  15
            

//   -------------------------------------------------------          
// class Product{
//     constructor(itemName){
//         this.itemName = itemName;
//     }
//     getItem(){
//         return this.itemName + " is a product";
//     }
// }

// class Furniture extends Product {
//     constructor(itemName){
//         super(itemName);
//     }
//     getItem(){
//         return this.itemName + " is a furniture"
//     }
// }

// let pencil = new Product("pencil");
// let chair1 = new Furniture("chair");


// ----------------------------------------------


class Student{
    constructor(name,roll,dob){
        this.name = name;
        this.roll = roll;
        this.dob = dob;
    }
}

let obj1 = new Student('raj',11,1995);

class Player extends Student{
    
}