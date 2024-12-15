var c=300
let a=500
if(true){
    let a=10
    const b=20
    // console.log("Inner : ",a);
}
// console.log("Ouuter Scope:",a);
// console.log(b);
// console.log(c);

function one(){
    const userName="meet"

    function two(){
        const website="youtube";
        // console.log(userName);
    }
    // console.log(website)
    two()
}

one()

if(true){
    const username="Vaibhav"
    if(username==="Vaibhav"){
        const website="youTube"
        // console.log(username + website);
        //myFun()
    }
    // console.log(website);
}
// console.log(userName)

//++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone (num){
    return num+1
}



addTwo(5)
const addTwo=function(num){   // it is called expression caue it is used with variable here we can not use befor it declare 
    return num + 2
}
