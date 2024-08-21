function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("R");
}
// sayMyName()

// function addTwoNumber(number1,number2)// parameters
// {
//    console.log(number1+number2);
// }
// addTwoNumber(10,4) //Argument

function addTwoNumber(number1,number2)// parameters
{
//    let result = number1+number2;
//    return result; 
      return number1+number2;
}

const result = addTwoNumber(10,10)

// console.log("result:",result);

function LoginUserMessage(userName){
    if(userName === undefined)
    {
        console.log("Please Enter a Username");
        return
    }
    return `${userName} just logged in `
}

console.log(LoginUserMessage("Man Choudhary"));
