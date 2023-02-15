function value(x: number): number {
    return x
}

function value2(x: string): string {
    return x
}

let num = value(10)
console.log(num)

let city = value2("Sydney")
console.log(city)

function value3<T>(x:T):T {
    return x
}

let num3= value3<number>(2)
let city3 =value3<string>("Melbourne")

class GenericClass<T>{
    variable:T
    function (parameter:T):T {
        return parameter   
    }
}