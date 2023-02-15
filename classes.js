var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var House = /** @class */ (function () {
    function House(roomCount, windowCount, floor) {
        this._roomCount = roomCount;
        this._windowCount = windowCount;
        this._floor = floor;
    }
    House.prototype.eatDinner = function () {
        console.log("Eat dinner at " + this._floor + " .level");
    };
    return House;
}());
var house = new House(3, 4, 5);
house.eatDinner();
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return "Dear " + this._name;
        },
        set: function (firstName) {
            this._name = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.save = function () {
        console.log("Person saved");
    };
    return Person;
}());
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Client.prototype.makeSale = function () {
        console.log("Sold");
    };
    return Client;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.paySalary = function () {
        console.log("Salary was paid");
    };
    return Employee;
}(Person));
var client = new Client();
client.name = "Irene";
console.log(client.name);
client.makeSale();
client.save();
var employee = new Employee();
employee.save();
employee.paySalary();
