class House{
    _roomCount:number
    _windowCount:number
    _floor:number
    constructor(roomCount:number,windowCount:number,floor:number){
        this._roomCount = roomCount
        this._windowCount=windowCount
        this._floor=floor
    }
    eatDinner(){
        console.log("Eat dinner at " + this._floor+ " .level")
    }
}

let house= new House(3,4,5)
house.eatDinner()

class Person{
    private _name:string

    get name():string{
        return "Dear " + this._name
    }
    set name(firstName:string){
        this._name = firstName
    }

    save(){
        console.log("Person saved")
    }
}

class Client extends Person{
    makeSale(){
        console.log("Sold")
    }
}

class Employee extends Person{
    paySalary(){
        console.log("Salary was paid")
    }
}

let client = new Client()
client.name ="Irene"
console.log(client.name)
client.makeSale()
client.save()

let employee = new Employee()
employee.save()
employee.paySalary()