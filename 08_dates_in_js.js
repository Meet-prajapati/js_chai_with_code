let myDate = new Date()
console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

console.log(typeof(myDate));

//let myCreateDate = new Date(2024,7,3) // months start from 0
//let myCreateDate = new Date(2024,7,3,5,3) // months start from 0
// let myCreateDate = new Date("2024-01-14") // Here month strat from 1
let myCreateDate = new Date("01-14-2024") // Here month strat from 1

// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now() // here we can  compare two dates
// console.log(myTimeStamp);// here we can  compare two dates
// console.log(myCreateDate.getTime());// here we can  compare two dates by covertinh into second using gettime


// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getHours());


newDate.toLocaleDateString('default',{
    weekday:"long",
})
console.log(newDate);