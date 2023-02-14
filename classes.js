var House = /** @class */ (function () {
    function House(roomCount, windowCount, floor) {
        this._roomCount = roomCount;
        this._windowCount = windowCount;
        this._floor = floor;
    }
    House.prototype.eatDinner = function () {
        console.log("ate dinner at" + this._floor + " .level");
    };
    return House;
}());
var house = new House(3, 4, 5);
house.eatDinner();
