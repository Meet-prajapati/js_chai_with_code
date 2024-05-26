function calculateCartPrice (val1,...num1){  // rest operator 
    return num1                              // val1,val2 it take value but not display value which remain it is display like here 400 an 500
}

console.log(calculateCartPrice(200,400,500))

// +++++++++++++++++++++++++++objects in functions ++++++++++++++++++++++++++++
const user={
    username:"meet",
    price:989
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleobject(user)
handleobject({
    username:"vaibhav",
    price:399
})


// +++++++++++++++++++++++++++++arrays in functins+++++++++++++++++++++++++++++
const myArray=[200,345,344,323,233]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([122,3234,4554,344]));