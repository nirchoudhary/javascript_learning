const user = {
    username :"Rituraj kumar",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} Welcome to my website`);   
       // console.log(this);
        
    }
}
// we use [this] keyword show current context in the scope{}
// user.welcomeMessage();//Rituraj kumar Welcome to my website
// user.username= "Nir";
// user.welcomeMessage();//Nir Welcome to my website


function chai(){
    //console.log(this.username);//undefined 
}
chai();

const AddTwoNumbers= (num1 , num2) => {
    return num1+num2; 
}
console.log(AddTwoNumbers(10,30));
// emplysite return

const TwoNumbers= (num1 , num2) =>  num1+num2; //40 {}<= ke under likha to return karna hoga 
const ThreeNumbers= (num1 , num2, num3) =>  (num1+num2+num3) //40 ()<= to return ki koi jarurat nhi hai
console.log(ThreeNumbers(10,30,50));

