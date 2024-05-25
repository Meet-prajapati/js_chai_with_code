function sayMyname() {
  console.log("M");
  console.log("E");
  console.log("E");
  console.log("t");
}

// sayMyname()

function addTwoNUmbers(Number1,Number2){//parameters
        // console.log(Number1+Number2)
        let result=Number1+Number2
        console.log("Meet");
        // return result
        return Number1+Number2        
}

const result=addTwoNUmbers(12,3);//arguments

// console.log("Result :", result);


function loginUserMessage(username="sam"){
  if(!username){
    console.log("Please enter a username");
    return
  }
  return `${username} just logges in`
}
// console.log(loginUserMessage("Meet"))
console.log(loginUserMessage())

