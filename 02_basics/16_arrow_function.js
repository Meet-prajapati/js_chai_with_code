const user= {
    username :"meet",
    price : 999,


    welcome  :  function()  {
        console.log(`${this.username }, welcome to the website how may i help you `);
        console.log(this)
    }
}

// user.welcome()
// user.username="sam"
// user.welcome()

// function chai(){
//     let username="meet"
//     console.log(this.usrname);
// }
//chai()

const chai= () => {
    let username="meet"
    console.log(this.username);
}

// ++++++++++++++++++++ arrow function /  Explicite ++++++++++++++++++++++++++++++ 
const addTwo= (num1,num2) => {
    return num1+num2;    
}

// +++++++++++++++++ implicite  +++++++++++++++++++++++++
const addTwo1 = (num1,num2)=> (num1+num2) // good habit to use in it 

const addtwo=(num1,num2)=> ({username : 'hitesh'})
console.log(addTwo(3,4))
console.log(addTwo1(3,9))
// browser global variable is window 