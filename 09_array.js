// array is an object 
// -> it is resizeble and it can be mix 
const myArr=[1,2,3,4,5,6,true,"hitesh"]
const myHeors=["dhoni","mahi","sachine"]
const myArr2=new Array(1,2,3,4)

// console.log(myArr[2]);

//array methods

//myArr.push(9)
//myArr.pop()

//myArr.unshift("vaibhav")// add at start
// myArr.shift("vaibhav")// delete at start

// console.log(myArr.includes("hitesh"))
// console.log(myArr.indexOf("hitesh"))

// const newArr=myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log( typeof newArr);

console.log("A",myArr);

const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)

const myn2=myArr.splice(1,3)// splice manipulate orignal array 
console.log("C",myArr)
console.log(myn2);
