// we declare object in teo ways

//singleton
// Object.create //single ton object 
const mySym = Symbol("Key1")
const JsUser = {
    name :"Nir",
    age: 20,
    [mySym]: "Key1",
    location: "Indore",
    Email: "Choudharynir@55gmail.com",
    IsLoggedIn: false,
    LastLoginDays:["Monday", "Tuesday"]
}
// console.log(JsUser.Email);
// console.log(JsUser["Email"]);
// console.log(JsUser[mySym]);
//change Email Id 
// Object.freeze(JsUser)// block the object and do not allow to modified it further

JsUser.Email="Nirchoudhaty@2005gmail.com" 
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello From Code World"); 
}
JsUser.greetingTwo = function(){
    console.log(`hello My Name is ,${this.name}`);
    
} 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



