const coding = ['js','ruby','swift','java','python'];

coding.forEach(codn => {
    // console.log(codn)
});

coding.forEach(function (item) {
    // console.log(item)
});

function prinMe(item){
    // console.log(item)
}

// coding.forEach(prinMe)

coding.forEach((item,index,array) =>{
    // console.log(item,index,array);
})

const myCding = [
    {
        rno:1,
        name:'vaibhav'
    },
    {
        rno:2,
        name:'Jaydeep'
    },
    {
        rno:3,
        name:'Mahesh'
    },
    
]

myCding.forEach( (item) =>{
    // console.log(item.rno,item.name)
})



// ************************************* filter *************************************************




// const newNum = myNum.filter( (num) => num > 5 )
// console.log(newNum)
// const myNum=[1,2,3,4,5,6,7,8,9,10]
// const newNum=myNum.filter( (num) => {
//     return num>4
// } ) 
// console.log(newNum)


const book = [
    {
        name:'Book one',
        publish : 1998,
        price : 300
    },
    {
        name:'Book Two',
        publish : 2012,
        price : 900
    },
    {
        name:'Book Three',
        publish : 1989,
        price : 800
    },
    {
        name:'Book Four',
        publish : 2016,
        price : 100
    }
    
]

// const UserBooks = book.filter( (bk) => bk.price>400  )
const UserBooks = book.filter( (bk) => {
    return bk.publish>2000 && bk.price>500
}  )

console.log(UserBooks)
