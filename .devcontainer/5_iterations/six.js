const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNumber = myNumbers
                   . map((num) => num*10)
                   .map((num) => num+10)
                   .filter((num) => num>=50)
// console.log(newNumber);

//reduce 

const myNum = [1,2,3,4,]

// const myTotal = myNum.reduce(function(acc , currval){
//     // console.log(`acc :${acc} and currval :${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);

// using arrow function 

const myTotal = myNum.reduce((acc,curr) => acc+curr, 0)
console.log(myTotal);


const shoppingcart = [
    {
        itemName : "Js Course",
        Price : 999,
    },
    {
        itemName : "Hacking ",
        Price : 2999,
    },
    {
        itemName : "Full Stack Development",
        Price : 5999,
    },
]

const total= shoppingcart.reduce ((acc, item)=> acc+item.Price , 0)
console.log(total);
