const ipl=["dhoni","jaiswala","raydu"]
const bcci=["amit","drvide","ajay"]

//ipl.push(bcci)
// console.log(ipl);
// console.log(ipl[3][1]);

// const cricket=ipl.concat(bcci)// we have to use new array using new variable
// console.log(cricket)

const cricket=[...ipl,...bcci]// it is good to add sprad operator
// console.log(cricket);

const fotball=[1,2,3,[4,5,6],7,[6,7,[8,9]]]

const realArray=fotball.flat(Infinity)
// console.log(realArray);

console.log(Array.isArray("Meet"))// check array or not
console.log(Array.from("Meet"))// make a array
console.log(Array.from({name:"meet"}))//interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
