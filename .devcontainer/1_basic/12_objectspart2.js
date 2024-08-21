// const tinderUser = new Object() // this is single ton object 

const tinderUser = {} // this is a non single ton object

tinderUser.ID = "12345"
tinderUser.name = "Cote"
tinderUser.isLoggedIn = false

// console.log(tinderUser);//{ ID: '12345', name: 'Cote', isLoggedIn: false }


const regularUser = {
    email: "some@gmail.com",
    filename:{
        UserFullName:{
            userName: "Krishna ji",
            LastName : "Choudhary"
        }

    }
}
// console.log(regularUser.filename.UserFullName); //{ userName: 'Krishna ji', LastName: 'Choudhary' }

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}

const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const course ={
    coursename: "Java Scrip Advance",
    price : "999",
    coursInstruction : "Hitesh"
}
const{coursInstruction: instructor} = course
console.log(instructor);



