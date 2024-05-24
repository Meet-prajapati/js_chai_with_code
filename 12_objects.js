//singleton

//const tindeUser=new Object()
const tindeUser={}

tindeUser.id="1223ABC"
tindeUser.name="Meet"
tindeUser.isLoggedIn=false

//console.log(tindeUser)

// +++++++++++++++++++++++++++++++++++++++++Nested objects++++++++++++++++++++++++++++++

const regulerUser={
    email:"sum@gamil.com",
    fullname:{
        userfullName:{
            firstname:"meet",
            secondname:"prajapati"
        }
    }
}

// console.log(regulerUser.fullname.userfullName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"c",6:"d"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}

// console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gamil.com"
    },
    {

    }
]

console.log(users[0].email)

console.log(tindeUser);

console.log(Object.keys(tindeUser));// convert keys into array
console.log(Object.values(tindeUser));// convert value  
console.log(Object.entries(tindeUser));// separate every key value into array

console.log(tindeUser.hasOwnProperty('isLogged'));// check property have or not