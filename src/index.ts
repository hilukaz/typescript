let x:number=10;

console.log(x);

//tipos básicos 
let Name:string="matheus"
let age:number=39;
const isAdmin:boolean =true

//String != string

//object
const array:number[]=[1,2,3]
console.log(array);
console.log(array.length)
array.push(5)
console.log(array)

//tuple. muitos valores com tipos diferentes de dados
let myTuple:[number,string,string[]]
myTuple=[5,"sim",["a","b"]]

//object literals ->{prop:value}
const user:{name:string,age:number}={
    name:"texto",  
    age:3,
}
console.log(user)
console.log(user.name)

//union type
let id: string|number="10"
id=200
id="aa"

//type alias
type myIdType=number|string//você cria um type pra fazer a junção de 2 types
const userId:myIdType=10
const productId:myIdType="awdfioh"

//enum
//tamanho de roupas (size:médio)
enum Size{
    P="Pequeno",
    M="Médio",
    G="Grande"
}
const camisa={
    name:"camisa grande",
    size:Size.G, 
}
console.log(camisa)

//literal types
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
 
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

//funcoes
function sum(a:number,b:number){
    return a+b
}
console.log(sum(2,1))

function sayHelloTo(name:string):string{//retorno em string
    return `hello ${name}`;
}
console.log(sayHelloTo("lucas"))

function logger(msg:string):void{//função que não possui retorno
    console.log(msg)
}
logger("teste!");

function greeting(name:string,greet?:string){//greet pode existir ou não
    console.log(`Ola ${greet} ${name}`)//greet indefined
    if (greet) {//se greet existir
        console.log(`Ola ${greet} você existe`)
        return
    }
   console.log(`Olá ${name} o greet não existe`)
}
greeting("josé")
greeting("Pedro","greeet")

//interfaces padronizam algo para utilizar como tipos
interface MathFunctionsParams{
    n1:number,
    n2:number,
}
function sumNumbers(nums:MathFunctionsParams){
    return nums.n1+nums.n2;
}
console.log(sumNumbers({n1:1,n2:2}))

function multiply(nums:MathFunctionsParams){
    return nums.n1*nums.n2
}
const  someNumbers:MathFunctionsParams={
    n1:5,
    n2:10
}
console.log(multiply(someNumbers ))

//narrowing ->greet, é um tipo de narrowing
//checagem tipos
function doSomething(info:number|boolean) {
    if(typeof info==="number"){
        console.log(`O número é ${info}`)
        return
    }
    console.log("Não foi passado um número")
}
doSomething(5)

//generics = any
//tipo tanto faz
function showArraygeneric<T>(arr:T[]){
    arr.forEach((item)=>{
        console.log(`Item ${item}`)
    })
}
const arrrr=[1,"a","d",true]
showArraygeneric(arrrr)

//class
class User{
    name
    role
    isApproved

    constructor(name:string, role:string,isApproved:boolean){
        this.name=name
        this.role=role
        this.isApproved=isApproved
    }
    showUserName() : void {
        console.log(`O nome do usuário é ${this.name}`)
    }
    getUserRole(permission: boolean): void {
        if (permission) {//if permission===true
            console.log('SuA PERMISSAO é' + this.role)
            return;
        }
        console.log('Informação restrita')
    }
}
const zeca=new User("Zeca","admin",true)
console.log(zeca)
zeca.showUserName()
zeca.getUserRole(true)//passa permissão


// interfaces em classes
interface Ivehicle {//classes com parametros iguais
    brand: string
    showBrand(): void
}

class Car implements Ivehicle {
    brand;
    wheels


    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand() {
        console.log('A marca do seu veiculo é: ' + this.brand)
    }
}

const fusca = new Car('VW', 4);

fusca.showBrand();

// heraca

class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)
console.log(a4)
a4.showBrand()

// decorators
// constructor decorator
function BaseParamaters() {
    return function <T extends  {new (...args: any[]) : {}}>(constructor: T){
        return class extends constructor {
            id = Math.random()
            created_At = new Date();
        }
    }
}
@BaseParamaters()
class Person {
    name
    constructor(name : string) {
        this.name = name
    }
}

const sam = new Person('Sam')
console.log(sam)