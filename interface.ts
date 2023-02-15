interface Product{
    id:number
    name:string
    unitPrice:number
}
// difference between interface and class is
// you must use all the properties in the interface
// but in the class you dont have to
class Product2{
    id:number
    name:string
    unitPrice:number
}

function save(product:Product){
    console.log(product.name+ " saved!")
}

function save2(product2:Product2){
    console.log(product2.name+ " saved!")
}

save({id:1, name:"Laptop",unitPrice:10})

let mouse = new Product2()
mouse.name="ATech"

save2(mouse)

interface PersonService{
    save()
}

class CustomerService implements PersonService {
    save () {        
    }
}