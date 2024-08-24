// for (const element of object) {
    
// }
const arr =[1,2,3,4,5,6,7,8,9,10]
for (const num of arr) {
    // console.log(num); 
}

let string = "Would you like to do ?";

for (const str of string) {
    // console.log(str);
    
}

//Map

const map = new Map()
map.set('IN', "India")
map.set("USA" , "United State of America")
map.set("FR" , "France")
map.set('IN', "India")
console.log(map);

for (const [key , value] of map) {
    console.log(key , ':-' , value);
    
}
const myobject = {
    "game 1" : "NFS",
    "game 2" : "Free Fire",
    "game 3" : "Pub-g"
}


for (const game of myobject) {
    console.log(game);// myobject is not iterable  
}