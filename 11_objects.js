// 

// object literals
// Object.create// contsructor method 
const mySym=Symbol("key1")


const jsUser={
    name:"meet",
    "full name":"meet prajapati",
    [mySym]:"myKey1",
    age:18,
    phone_no:8877665544,
    location:"meetprajapati@gamil.com",
    isLoogin:false,
    lastLoginDays:["Monday","Tuesday"]

}

// console.log(jsUser.name);
// console.log(jsUser["location"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

 jsUser.locatio="vaibhavprajapati@gamil.com"
//  Object.freeze(jsUser)
jsUser.locatio="vaibhavprajapati@sjkh.com"

// console.log(jsUser)

jsUser.greeting=function(){
    console.log("hello js user")
}
jsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`)
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
