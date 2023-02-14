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