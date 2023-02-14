function sum(x,y){
    return x+y
}

function sum1(x:number,y:number) : number{
    return x+y
}

sum("g",5)
sum1(5,5)

let sum2= function(x:number,y:number):number{
    return x+y
}

console.log(sum(2,3))
console.log(sum("Sydney",3))
console.log(sum1(2,3))
console.log(sum2(5,3))

function sum3(x:number,y?:number):number{
    if(y){
        return x+y
    }
    return x
}

console.log(sum3(5,8))

function invite(firstInvited:string,...others:string[]):string{
    return others.join(" ")
}

console.log(invite("Irene","Mila","Mark","Boncuk","Chabby"))

function invite1(...others:string[]):string{
    return others.join(" ")
}

console.log(invite1())