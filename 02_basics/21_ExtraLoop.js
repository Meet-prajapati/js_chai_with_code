// +++++++++++++++++++++++++ for of ++++++++++++++++++++
// [" ","",""]
// [{},{},{}]

const arr=[1,2,3,4,5];

for (const num of arr) {
    // console.log(num)
}

const gr="hello World";

for (const greet of gr) {
    if(greet == " ")
        continue
    // console.log(greet);    
}

// +++++++++++++++++++++++++ Map ++++++++++++++++++++

const map= new Map()
map.set('IN',"INDIA");
map.set('USA',"UNITED STATE OF AMERIC")

// console.log(map)

for (const [key,value] of map) {
    // console.log(key ,':-' , value)
}

const myObj={
    'no':1,
    'name':'vaibhav',
    'salary':20000
}
// for of is not work with the object 

// for (const [key,value] of myObj) {
//     console.log(key,"=" , value);
    
// }



