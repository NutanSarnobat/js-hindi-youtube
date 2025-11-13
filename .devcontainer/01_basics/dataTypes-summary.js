//primitive(call by value)

//7 types- string,number,boolean,null,undefined,symbol,BigInt

const score=100;
const scoreValue=100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id==anotherId);

//const bigNumber=1322655487995656n

//nonprimitive(call by refernce)

//array,objects,functions

const heros=["shaktiman","naagraj","doga"]

let myObj={
    name:"hitesh",
    age:22,
}

const myFuction=function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);