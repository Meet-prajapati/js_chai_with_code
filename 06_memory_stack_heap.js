// +++++++++++++++++++++++++++ stack +++++++++++++++++++++++++++++

//stack(primitive)

let myYoutube = "hiteshprajapati"

let anothername= myYoutube;

anothername="meetprajapati"
//console.log(myYoutube);
//console.log(anothername);

// ++++++++++++++++++++++++++++ Heap (Non-primitive)+++++++++++++++++++++

//array objects etc

let userOne= {
    emial:"user@google.com",
    upi:"user@12233"
}
let userTwo = userOne

userTwo.email="meetprajapati@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);