// Primitive (it is call by value)

//7 catagories: String ,Number, Booleam, Null,Undefined, Symbol, BigInt

// ****javascript is Dynamic lsnguage****

// const id = Symbol('123');
// const AnotherId = Symbol('123');

// console.log(typeof(AnotherId));
// console.log(typeof(id));
// console.log(id === AnotherId);





// reference Type(Non- premitive)

//Arrays , Objects, Functions 

// const heros =["shaktiman"," Krish" , "Nagrjun" , "Bahubali"]

let myobj={
    name: "Nir",
    age: 22,
}

// const myFunction = function(){
//     console.log(myobj);
// }
console.log(myobj);

// ****************************************************************************


//Stack(primitive) ,Heap(non-primitive)

//  let MyYoutubeChannel = "Explore_with_nir"

//  let anothername = MyYoutubeChannel
//   anothername = "chaiorcode"
//  console.log(MyYoutubeChannel);
//  console.log(anothername);

 let userOne = {
    Email: "userOne01@gmail.com",
    upi: "nir@ybl"
 }

 let UserTwo = userOne
 UserTwo.Email = "nirjsodo@fddfv"

 console.log(UserTwo);
 console.log(userOne);
 
 
 
 
   
 

