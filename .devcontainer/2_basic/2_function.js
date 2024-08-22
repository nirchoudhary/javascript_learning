function calculateCartPrice(num1){
       return num1
}
// console.log(calculateCartPrice(200,300,500)); // only first Value consider(200)
// and we solve the problem using ["Rest Operator"] ,this is rest operator =>(...)

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,500));//[ 200, 300, 500 ] in array Formate

function calculateCartPrice(val1 , val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,300,500));//[500]

//now we declare the object using the Function

const user = {
    username:"Nir Choudhary",
    Price: 199
}

function HandleObject(anyobject){
    console.log(`user name is ${anyobject.username} And price ${anyobject.Price}`);   
}
 HandleObject(user)//user name is Nir Choudhary And price 199

 const myNewArray = [200,300,400,500]
 
function resultSecondvalue(getArray){
        return getArray[2]//400
}
console.log(resultSecondvalue(myNewArray));//400


