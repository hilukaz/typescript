"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
console.log(x);
//tipos básicos 
let Name = "matheus";
let age = 39;
const isAdmin = true;
//String != string
//object
const array = [1, 2, 3];
console.log(array);
console.log(array.length);
array.push(5);
console.log(array);
//tuple. muitos valores com tipos diferentes de dados
let myTuple;
myTuple = [5, "sim", ["a", "b"]];
//object literals ->{prop:value}
const user = {
    name: "texto",
    age: 3,
};
console.log(user);
console.log(user.name);
//union type
let id = "10";
id = 200;
id = "aa";
const userId = 10;
const productId = "awdfioh";
//enum
//tamanho de roupas (size:médio)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "camisa grande",
    size: Size.G,
};
console.log(camisa);
//funcoes
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 1));
function sayHelloTo(name) {
    return `hello ${name}`;
}
console.log(sayHelloTo("lucas"));
function logger(msg) {
    console.log(msg);
}
logger("teste!");
function greeting(name, greet) {
    console.log(`Ola ${greet} ${name}`); //greet indefined
    if (greet) { //se greet existir
        console.log(`Ola ${greet} você existe`);
        return;
    }
    console.log(`Olá ${name} o greet não existe`);
}
greeting("josé");
greeting("Pedro", "greeet");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiply(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiply(someNumbers));
//narrowing ->greet, é um tipo de narrowing
//checagem tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
//generics = any
//tipo tanto faz
function showArraygeneric(arr) {
    arr.forEach((item) => {
        console.log(`Item ${item}`);
    });
}
const arrrr = [1, "a", "d", true];
showArraygeneric(arrrr);
//class
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    getUserRole(permission) {
        if (permission) { //if permission===true
            console.log('SuA PERMISSAO é' + this.role);
            return;
        }
        console.log('Informação restrita');
    }
}
const zeca = new User("Zeca", "admin", true);
console.log(zeca);
zeca.showUserName();
zeca.getUserRole(true); //passa permissão
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log('A marca do seu veiculo é: ' + this.brand);
    }
}
const fusca = new Car('VW', 4);
fusca.showBrand();
// heraca
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
// decorators
// constructor decorator
function BaseParamaters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.created_At = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamaters()
], Person);
const sam = new Person('Sam');
console.log(sam);
