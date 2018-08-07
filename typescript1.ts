document.write("HELLO WORLD");
var myName = "Parag";
var myAge:number = 32;
var canVote:boolean = true;
var anything:any = "capgemini";
document.write("HEllo!!");
//document.getElementById("aa").innerHTML="I am "+myName;
document.write("<br><br>"+"type of myName is "+typeof(myName));
document.write("<br><br>"+"type of myAge is "+typeof(myAge));
document.write("<br><br>"+"type of canVote is "+typeof(canVote));
document.write("<br><br>"+"type of anything is "+typeof(anything));


const PI = 3.14;
//PI = 22;    as constant variable value cannot be changed
document.getElementById("<br>PI is a "+typeof(PI)+" "+PI);

var StoN:number=parseInt("aa");  //it will give a error
var StoN:number=parseInt("123");
var NtoS:number=5;

document.write("<br>StoN is a "+typeof(StoN)+" "+StoN);
document.write("<br>NtoS is a "+typeof(NtoS));

var rArray=[4,16,36,49];
for(var val in rArray){
    document.write(val+"<br>");
}

var mappedArray = rArray.map(Math.sqrt);
document.write("mapped Array<br>");
for(var val in mappedArray){
    
    document.write(mappedArray[val]+"<br>");
}

var addOn=(x)=>{
    return x+1;
}
console.log(addOn(1));

var addOne=(x)=>x+1;  //we dont write return type if we write function in single line
console.log(addOne(1));

var getSum = function(num1:number,num2:number):number
{
    return num1+num2;
}

var ans:number=getSum(2,2);
console.log(ans);

var total = [2,3,4].reduce(
    function(a,b){
        return a+b;
    }
);

console.log(total);

var sumAll = function(...num:number[]):void{    //spread operator use in typescript
        var sum=num.reduce((a,b)=>a+b);
        console.log(sum);
}
sumAll(2,2);
sumAll(2,2,2);

/***************class****************/

class emp{
    private myName:string="Parag";
    getName():string{
        return this.myName;
    }
    setName(myName:string):void{
        this.myName=myName;
    }
}
var e1:emp=new emp();
console.log(e1.getName());
e1.setName("Honey");
console.log(e1.getName());
console.log(typeof(e1));
//console.log(e1.myName);  //we can directly access the myName parameter as myName is not private member but if it is private then we only gets warning in the typescript 

/************************Another class example*************************/

class car{
    isInNeutral:boolean=false;
    speed:number=50;
    carStart():void{
        console.log("Car started");
    }
    carStop():void{
        console.log("Bring car to neutral");
    }
    carInit():void{   
    if(this.isInNeutral){
        this.carStart();
    }
    else{
        this.carStop();
    }
    }
    increaseSpeed():void{
        this.speed=this.speed+10;
        console.log("Speed = "+this.speed);
    }
    
    decreaseSpeed():void{
        this.speed=this.speed-5;
        console.log("Speed = "+this.speed);
    }
}
var verna = new car();
verna.carInit();
verna.increaseSpeed();
verna.decreaseSpeed();

/********************another class example ***************/

class TV{
    Manufacturer:string;
    size:number;
    MaxChannels:number;
    Price:number;
    DisplayType:string;
    Volume:number=10;
    /***************we can also intitalize the variable using constructor*****************/
    /*we need constructor as we have a object this already need some property that we can initalize using constructor*/
    constructor(Manufacture){
        this.Manufacturer=Manufacture;
    }
    /**********below set and get method is used to initialize the Manufacture variable****************/
/*    setManufacture(Manufacturer:string):void{
        this.Manufacturer=Manufacturer;
    }
    getManufacture():string{
        return this.Manufacturer;
    }*/
    On():void{
        console.log("TV is On"+this.Manufacturer);
    }
    Off():void{
        console.log("TV is Off"+this.Manufacturer);
    }
    ChangeChannel(ChannelNumber:number):void{
        console.log("Channel change to : "+ChannelNumber);        
    }
    IncreaseVolume():void{
        this.Volume=this.Volume+10;
        console.log("Volume is Incresed "+this.Volume);
    }
    DecreaseVolume():void{
        this.Volume=this.Volume-5;
        console.log("Volume is Decresed "+this.Volume);
    }
}
//var t1=new TV();
var t1=new TV("Lenovo");
//t1.setManufacture("Sumsung");
//console.log(t1.getManufacture());
t1.On();
t1.Off();
t1.ChangeChannel(22);
t1.IncreaseVolume();
t1.DecreaseVolume();

/*******************Another Example *****************/

class Animal{
    //dname:string;     
    //downer:string;
    static numOfAnimals:number=0;
    private _weight:number;

    constructor(private dname:string,private downer:string){   //here we have declare dname and downer as private 
        Animal.numOfAnimals++;     //so dname and downer will be hoisted to top and become private for class as
                                  //above they are not declare any public or private
    }
    ownerInfo(){
        console.log("<br>"+this.dname+"is owned by"+this.downer+"<br>");
    }

    get weight():number{
        return this._weight;
    }
    set weight(w:number){
        this._weight=w;
    }
}

var dog = new Animal("DOGI","Parag");
dog.weight = 100;
console.log(dog.weight);
console.log(Animal.numOfAnimals);
//console.log(dog._weight);      //cant do this as they _weight is a private so we need set and get method 
//dog._weight=200;
//console.log(dog._weight);

var dog1 = new Animal("D","P");
dog.weight = 101;
console.log(dog.weight);
console.log(Animal.numOfAnimals);

/****************Inheritance from above Animal class****************/

class DomesticAnimal extends Animal{
    constructor(private _typeOfWork, name, owner){
        super(name,owner);
    }
    get typeOfWork():string{
        return this._typeOfWork;
    }
    set typeOfWork(t:string){
        this._typeOfWork= t;
    }
}
var danimal = new DomesticAnimal("Weight","DD","PP");
//danimal.typeOfWork = "RUNNING";
console.log(danimal.typeOfWork);
console.log(DomesticAnimal.numOfAnimals);


/**************Interface**************/

interface Vehicle{
    drive():any;
}

class Car implements Vehicle{
    constructor(private wheels:number){}
    drive():void{
        console.log("The car drives with "+this.wheels+"wheels");
    }
}

class Bicycle implements Vehicle{
    constructor(private wheels:number){}
    drive():void{
        console.log("The bicycle drives with "+this.wheels+"wheels");
    }
}
var pcar =new Car(4);
var bike = new Bicycle(2);
pcar.drive();
bike.drive();

/*******************************Assignment Task************************/

class Human{
    FN:string;
    LN:string;
    Age:number;
    Height:number;
    constructor( FN:string, LN:string, Age:number, Height:number){
        
        this.FN=FN;
        this.LN=LN;
        this.Age=Age;
        this.Height=Height;
    }
    Walk(){
        console.log("HUMAN WALK method called");
    }
    Talk(){
        console.log("HUMAN TALK method called");
    }
    Run(){
        console.log("HUMAN RUN methjod is called");
    }
    ShowDetail(){
         console.log(this.FN,this.LN,this.Age,this.Height);
    }
}
class Employee extends Human{
    EmployeeId:number;
    Department:string;
    Salary:number;
    DOJoining:number;
    constructor(EmployeeId:number, Department:string, Salary:number, DOJoining:number, FN,LN,Age,Height){
        super(FN,LN,Age,Height);
        this.EmployeeId=EmployeeId;
        this.Department=Department;
        this.Salary=Salary;
        this.DOJoining=DOJoining;
    }
    Code(){
        console.log("Code method of Employee class");
    }
    ReviewCode(){
        console.log("ReviewCode method of Employee class");    
    }
    ApplyForLeave(){
        console.log("ApplyForLeave method of Employee class");
    }
    
    ShowDetail(){
        super.ShowDetail();
        console.log(this.FN,this.LN,this.Age,this.Height,this.EmployeeId,this.Department,this.Salary,this.DOJoining);
    }
}
class Manager extends Employee{
    ManagerOfTeam:string;
    constructor(ManagerOfTeam,EmployeeId,Department,Salary,DOJoining,FN,LN,Age,Height){
        super(EmployeeId,Department,Salary,DOJoining,FN,LN,Age,Height);
        this.ManagerOfTeam=ManagerOfTeam;
    }
    GenerateReport(){
        console.log("GenerateReport Function is called of Manager class");
    }
    AssignTask(){
        console.log("AssignClass Function is called of Manager class");
    }
    ApproveLeave(){
        console.log("Leave approved");
    }
    showDetail(){
        super.ShowDetail();
        console.log(this.FN,this.LN,this.Age,this.Height,this.EmployeeId,this.Department,this.Salary,this.DOJoining,this.ManagerOfTeam);
    }
}

var h = new Human("Saurabh","Gupta",30,6);
var e = new Employee(153183,"JAVSCRIPT",101010,210796,"Dip","Malaya",40,5);
var m = new Manager("SomayoDipto","153188","JEE","123123","21/07/21","Parag","Badala","22","5.5");

h.ShowDetail();
e.ShowDetail();
m.showDetail();



/*******************another way to use interface without class******************/

interface superHero{
    realname:String;
    superName:String;
}

var sm1:superHero={
    realname:"Saurabh",
    superName:"SAW"
};
console.log(sm1.realname,sm1.superName);

var sm2:superHero[]=[];
sm2.push({realname:"Dip",superName:"@chillies"});
console.log(sm2[0]);

/******************Generics Concept****************/
/************Problem below******************/
class AClass<T>{
    add(v1:T,v2:T):T{
        return v1+v2;
    }
}
var obj = new AClass<number>();
function GetType<T>(val:T):string{
    return typeof(val);
}

GetType<int>('c');