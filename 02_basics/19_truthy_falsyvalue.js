const Isemail="h@gamil.com"

if(Isemail){
    console.log("Value is right ");
}else{
    console.log("Value is not right ");
}

//    Truthy Value Means it will consider that the value is true Without cheching any condition


// Fasly value means it will consider that the value is False without Checking Any Condition

//                                           +++++++++ fasly Value ++++++++++++

//  false , 0 ,-0, BigInt, 0n, " ", null , undefined ,NaN  All are the falsy value and other 

// ++++++++++++++ values are Truthy   ++++++++++++++++++++

//  "0",'false'," ", [] , object, function(){}

// We Can Check Object is Empty or not Using it We Can Do More Functionality using * Length * Key-word 
const empObj={}
if(Object.keys(empObj).length === 0){
    console.log("Object is Empty");
}


//    ++++++++++++++++ Nullish Coalescing Operator (??): nul undefined ++++++++++++++++++++++
//  it is use for sefety purpose 
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1= undefined ?? 12
val1= null ?? 10 ?? 30 
console.log(val1);

//  ++++++++++++++++++++++++++++++++++++ Terniary operator ++++++++++++++++++++++++++++++++++

// condtion ? true : false 

icePrice=200;

icePrice > 100 ? console.log("Ummy ") : console.log("Not That Much ");