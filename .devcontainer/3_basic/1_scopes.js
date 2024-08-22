// {} <=This Is Scope
let a = 200
if(true){
    let a =10
    const b = 20
    let c = 30
   // console.log("Inner:",a);//Inner: 10
    
}
// console.log(a);//200

function one(){
    const username = "Nir choudhary"

    function two(){
        const website = "nirchoudhary.com"
       // console.log(username);
        
    }
    // console.log(website);
    
    two();
    
}
one();

// ********************Interesting***************************

function addone(num)
{
    return num + 1;
}
console.log(addone(5))

const addtwo = function(num){
    return num + 2;
}
console.log(addtwo(10));


