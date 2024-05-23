//++++++++++++++++++++++++++++ Numbers ++++++++++++++++++++++++++++++++++++++
const score=400
//console.log(score)

const balance= new Number(100) // it define with datatype
//console.log(balance);// Number:100

//console.log(balance.toString());
//console.log(balance.toString().length);
//console.log(balance.toFixed(2));//100.00

const othernumber=23.8997

//console.log(othernumber.toPrecision(3)); //23.9

const hundares=1000000
//console.log(hundares.toLocaleString('en-IN'));//en-IN for india    10,00,000

// +++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-87));
// console.log(Math.round(4.56));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(12,34,56,3));
// console.log(Math.max(12,34,56,3));


console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);


const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min))

