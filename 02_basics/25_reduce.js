const myNum = [1,2,3]

// const myRed=myNum.reduce((acc,currval)=>
    
//     acc+currval,0; )


const myRed=myNum.reduce( function (acc,currval) {
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc+currval
},0)

console.log(myRed)

const shopingCart=[
    {
        itemname:"Js Course",
        price : 3000
    },
    {
        itemname:"C++ Course",
        price : 4000
    },
    {
        itemname:"Python Course",
        price : 8000
    },
    {
        itemname:"DataAnalics Course",
        price : 12999
    }
]

const final=shopingCart.reduce((acc,item)=>acc+item.price,0)

console.log(final);