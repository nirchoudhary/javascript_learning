const promise = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log('Async Task is Complete');
        resolve(); // Call resolve to fulfill the promise
    }, 1000);
});

promise.then(function() {
    console.log('Promise consumed');
});

const promiseTwo = new Promise(function( resolve,reject){
    setTimeout(function(){
     resolve({username:"Nir" , Email:"choudharynir@55Gmail.com"})
    },1000)
})

promiseTwo.then(function(user){
    console.log(user);
    
})

const promiseThree = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName:"Nir choudhary", Password:"12345"})
        }
        else{
            reject('Error : something went wrong')
        }
        
    },1000)
    
}) 
 promiseThree.then((user)=> {
        console.log(user);
        return user.userName
        
}).then((userName)=>{
    console.log(userName);
}).catch(function(error){
    console.log(error);
})

const promiseFore = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName: "Rituraj Kumar", Password:"133"})
        }else{
            reject('Error : js went wrong')
        }
    },1000)
})

async function consumePromiseFore() {
   try {
    const response =  await promiseFore;
    console.log(response);
   } catch (error) {
    console.log(error);
   }
   
}
consumePromiseFore();

async function getAllUsers() {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log('Error:',error);
    }
}
getAllUsers();