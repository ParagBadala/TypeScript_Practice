var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
document.write("HELLO WORLD");
var myName = "Parag";
var myAge = 32;
var canVote = true;
var anything = "capgemini";
document.write("HEllo!!");
//document.getElementById("aa").innerHTML="I am "+myName;
document.write("<br><br>" + "type of myName is " + typeof (myName));
document.write("<br><br>" + "type of myAge is " + typeof (myAge));
document.write("<br><br>" + "type of canVote is " + typeof (canVote));
document.write("<br><br>" + "type of anything is " + typeof (anything));
var PI = 3.14;
//PI = 22;    as constant variable value cannot be changed
document.getElementById("<br>PI is a " + typeof (PI) + " " + PI);
var StoN = parseInt("aa"); //it will give a error
var StoN = parseInt("123");
var NtoS = 5;
document.write("<br>StoN is a " + typeof (StoN) + " " + StoN);
document.write("<br>NtoS is a " + typeof (NtoS));
var rArray = [4, 16, 36, 49];
for (var val in rArray) {
    document.write(val + "<br>");
}
var mappedArray = rArray.map(Math.sqrt);
document.write("mapped Array<br>");
for (var val in mappedArray) {
    document.write(mappedArray[val] + "<br>");
}
var addOn = function (x) {
    return x + 1;
};
console.log(addOn(1));
var addOne = function (x) { return x + 1; }; //we dont write return type if we write function in single line
console.log(addOne(1));
var getSum = function (num1, num2) {
    return num1 + num2;
};
var ans = getSum(2, 2);
console.log(ans);
var total = [2, 3, 4].reduce(function (a, b) {
    return a + b;
});
console.log(total);
var sumAll = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sum = num.reduce(function (a, b) { return a + b; });
    console.log(sum);
};
sumAll(2, 2);
sumAll(2, 2, 2);
/***************class****************/
var emp = /** @class */ (function () {
    function emp() {
        this.myName = "Parag";
    }
    emp.prototype.getName = function () {
        return this.myName;
    };
    emp.prototype.setName = function (myName) {
        this.myName = myName;
    };
    return emp;
}());
var e1 = new emp();
console.log(e1.getName());
e1.setName("Honey");
console.log(e1.getName());
console.log(typeof (e1));
//console.log(e1.myName);  //we can directly access the myName parameter as myName is not private member but if it is private then we only gets warning in the typescript 
/************************Another class example*************************/
var car = /** @class */ (function () {
    function car() {
        this.isInNeutral = false;
        this.speed = 50;
    }
    car.prototype.carStart = function () {
        console.log("Car started");
    };
    car.prototype.carStop = function () {
        console.log("Bring car to neutral");
    };
    car.prototype.carInit = function () {
        if (this.isInNeutral) {
            this.carStart();
        }
        else {
            this.carStop();
        }
    };
    car.prototype.increaseSpeed = function () {
        this.speed = this.speed + 10;
        console.log("Speed = " + this.speed);
    };
    car.prototype.decreaseSpeed = function () {
        this.speed = this.speed - 5;
        console.log("Speed = " + this.speed);
    };
    return car;
}());
var verna = new car();
verna.carInit();
verna.increaseSpeed();
verna.decreaseSpeed();
/********************another class example ***************/
var TV = /** @class */ (function () {
    /***************we can also intitalize the variable using constructor*****************/
    /*we need constructor as we have a object this already need some property that we can initalize using constructor*/
    function TV(Manufacture) {
        this.Volume = 10;
        this.Manufacturer = Manufacture;
    }
    /**********below set and get method is used to initialize the Manufacture variable****************/
    /*    setManufacture(Manufacturer:string):void{
            this.Manufacturer=Manufacturer;
        }
        getManufacture():string{
            return this.Manufacturer;
        }*/
    TV.prototype.On = function () {
        console.log("TV is On" + this.Manufacturer);
    };
    TV.prototype.Off = function () {
        console.log("TV is Off" + this.Manufacturer);
    };
    TV.prototype.ChangeChannel = function (ChannelNumber) {
        console.log("Channel change to : " + ChannelNumber);
    };
    TV.prototype.IncreaseVolume = function () {
        this.Volume = this.Volume + 10;
        console.log("Volume is Incresed " + this.Volume);
    };
    TV.prototype.DecreaseVolume = function () {
        this.Volume = this.Volume - 5;
        console.log("Volume is Decresed " + this.Volume);
    };
    return TV;
}());
//var t1=new TV();
var t1 = new TV("Lenovo");
//t1.setManufacture("Sumsung");
//console.log(t1.getManufacture());
t1.On();
t1.Off();
t1.ChangeChannel(22);
t1.IncreaseVolume();
t1.DecreaseVolume();
/*******************Another Example *****************/
var Animal = /** @class */ (function () {
    function Animal(dname, downer) {
        this.dname = dname;
        this.downer = downer;
        Animal.numOfAnimals++; //so dname and downer will be hoisted to top and become private for class as
        //above they are not declare any public or private
    }
    Animal.prototype.ownerInfo = function () {
        console.log("<br>" + this.dname + "is owned by" + this.downer + "<br>");
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (w) {
            this._weight = w;
        },
        enumerable: true,
        configurable: true
    });
    //dname:string;     
    //downer:string;
    Animal.numOfAnimals = 0;
    return Animal;
}());
var dog = new Animal("DOGI", "Parag");
dog.weight = 100;
console.log(dog.weight);
console.log(Animal.numOfAnimals);
//console.log(dog._weight);      //cant do this as they _weight is a private so we need set and get method 
//dog._weight=200;
//console.log(dog._weight);
var dog1 = new Animal("D", "P");
dog.weight = 101;
console.log(dog.weight);
console.log(Animal.numOfAnimals);
/****************Inheritance from above Animal class****************/
var DomesticAnimal = /** @class */ (function (_super) {
    __extends(DomesticAnimal, _super);
    function DomesticAnimal(_typeOfWork, name, owner) {
        var _this = _super.call(this, name, owner) || this;
        _this._typeOfWork = _typeOfWork;
        return _this;
    }
    Object.defineProperty(DomesticAnimal.prototype, "typeOfWork", {
        get: function () {
            return this._typeOfWork;
        },
        set: function (t) {
            this._typeOfWork = t;
        },
        enumerable: true,
        configurable: true
    });
    return DomesticAnimal;
}(Animal));
var danimal = new DomesticAnimal("Weight", "DD", "PP");
//danimal.typeOfWork = "RUNNING";
console.log(danimal.typeOfWork);
console.log(DomesticAnimal.numOfAnimals);
var Car = /** @class */ (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        console.log("The car drives with " + this.wheels + "wheels");
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(wheels) {
        this.wheels = wheels;
    }
    Bicycle.prototype.drive = function () {
        console.log("The bicycle drives with " + this.wheels + "wheels");
    };
    return Bicycle;
}());
var pcar = new Car(4);
var bike = new Bicycle(2);
pcar.drive();
bike.drive();
/*******************************Assignment Task************************/
var Human = /** @class */ (function () {
    function Human(FN, LN, Age, Height) {
        this.FN = FN;
        this.LN = LN;
        this.Age = Age;
        this.Height = Height;
    }
    Human.prototype.Walk = function () {
        console.log("HUMAN WALK method called");
    };
    Human.prototype.Talk = function () {
        console.log("HUMAN TALK method called");
    };
    Human.prototype.Run = function () {
        console.log("HUMAN RUN methjod is called");
    };
    Human.prototype.ShowDetail = function () {
        console.log(this.FN, this.LN, this.Age, this.Height);
    };
    return Human;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(EmployeeId, Department, Salary, DOJoining, FN, LN, Age, Height) {
        var _this = _super.call(this, FN, LN, Age, Height) || this;
        _this.EmployeeId = EmployeeId;
        _this.Department = Department;
        _this.Salary = Salary;
        _this.DOJoining = DOJoining;
        return _this;
    }
    Employee.prototype.Code = function () {
        console.log("Code method of Employee class");
    };
    Employee.prototype.ReviewCode = function () {
        console.log("ReviewCode method of Employee class");
    };
    Employee.prototype.ApplyForLeave = function () {
        console.log("ApplyForLeave method of Employee class");
    };
    Employee.prototype.ShowDetail = function () {
        _super.prototype.ShowDetail.call(this);
        console.log(this.FN, this.LN, this.Age, this.Height, this.EmployeeId, this.Department, this.Salary, this.DOJoining);
    };
    return Employee;
}(Human));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(ManagerOfTeam, EmployeeId, Department, Salary, DOJoining, FN, LN, Age, Height) {
        var _this = _super.call(this, EmployeeId, Department, Salary, DOJoining, FN, LN, Age, Height) || this;
        _this.ManagerOfTeam = ManagerOfTeam;
        return _this;
    }
    Manager.prototype.GenerateReport = function () {
        console.log("GenerateReport Function is called of Manager class");
    };
    Manager.prototype.AssignTask = function () {
        console.log("AssignClass Function is called of Manager class");
    };
    Manager.prototype.ApproveLeave = function () {
        console.log("Leave approved");
    };
    Manager.prototype.showDetail = function () {
        _super.prototype.ShowDetail.call(this);
        console.log(this.FN, this.LN, this.Age, this.Height, this.EmployeeId, this.Department, this.Salary, this.DOJoining, this.ManagerOfTeam);
    };
    return Manager;
}(Employee));
var h = new Human("Saurabh", "Gupta", 30, 6);
var e = new Employee(153183, "JAVSCRIPT", 101010, 210796, "Dip", "Malaya", 40, 5);
var m = new Manager("SomayoDipto", "153188", "JEE", "123123", "21/07/21", "Parag", "Badala", "22", "5.5");
h.ShowDetail();
e.ShowDetail();
m.showDetail();
var sm1 = {
    realname: "Saurabh",
    superName: "SAW"
};
console.log(sm1.realname, sm1.superName);
var sm2 = [];
sm2.push({ realname: "Dip", superName: "@chillies" });
console.log(sm2[0]);
/******************Generics Concept****************/
var AClass = /** @class */ (function () {
    function AClass() {
    }
    AClass.prototype.add = function (v1, v2) {
        return v1 + v2;
    };
    return AClass;
}());
var obj = new AClass();
function GetType(val) {
    return typeof (val);
}
GetType('c');
