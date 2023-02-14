function greeter(name:string){
    return "Hi " + name
}

let message = greeter('Mila <3')

console.log(message)

let num:number = 24
num=10
num=10.4

let city:string = "Canberra"
city="Sydney"
city="Melbourne"
city="10"

let bool:boolean = true
bool=true
bool= false

let numbers:number[] = [1,2,3] 
let numbers1:Array<number>=[1,2,3]

let array:[number,string,boolean] = [1,"i",true]

enum Color {Red=1,Black,Blue}
let color: Color =Color.Blue

let value : any = "Sydney"
value=5
value= {}

let value1: void = undefined

function sayHi():void{
    console.log("Hi")
}

//undefined
let age:number

// null
class Client{

}



