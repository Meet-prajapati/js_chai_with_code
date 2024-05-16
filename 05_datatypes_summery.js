// ******************************** Premitive ********************************

// 7 types:  String,Number,Boolean,null,undefined,Symbol,Bigint
// null datatype is object
//const score = 100;
//const score = 122.34;

const isLoggedIn=false
const outsideTemp=null
let useemail;

const id=Symbol('123')
const anotherid =Symbol('123');

//onsole.log(id=== anotherid);
// console.log(id);a
// console.log(anotherid);

const bignumber= 22342343n;
//console.log(typeof(bignumber));


// ************************************************Non-primitive (Reference)********************************

// array,objects,Functions

const heros = ["meet","vaibhav","doga"];
console.log(heros);
let myObj={
    name:"hitesh",
    age:22
}
console.log(myObj);

const myFunction=function(){
    console.log("Hello World");
}
console.log(typeof(myFunction));

