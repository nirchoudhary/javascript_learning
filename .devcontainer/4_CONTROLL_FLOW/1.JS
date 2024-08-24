// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3
// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("Default Case Match");
        
//         break;
// }

const userEmail = "nirchoudhary@gmail.com"

if (userEmail) {
     console.log("Got User Email");
}else{
    console.log("Don't have User Email");  
}
// falsy Value =>(false , 0,-0, BigInt 0n , null,undefined,NaN)
// Truthy Value =>("0" , "False" , " " , [] , {} , function(){})

if (userEmail.length === 0){
 console.log("Array Id Empty");
}else{
    console.log("Email Address are Found"); 
}

const emptyObj = ""

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty"); 
}

