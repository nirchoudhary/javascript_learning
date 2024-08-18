const name = "nir"
const repoCount = 50

// console.log(name + repoCount + "Value");  //ye purana ho gya hai bhai!

// console.log(`Hello My Name is ${name} and my Repocount is ${repoCount}`);

const gameName = new String('Nir Choudhary')
console.log(gameName[0]);//N
console.log(gameName.__proto__); //{}
console.log(gameName.length);//13
console.log(gameName.toUpperCase()); // NIR CHOUDHARY
console.log(gameName.charAt(0));//N
console.log(gameName.indexOf("C")); //4

const newString = gameName.substring(0 , 4);// yaha par ye 0-3 tak ki hi string count karega like = (Nir)
console.log(newString);//Nir

const anotherString = gameName.slice(-12 , 5);//we also provide nagetive number (-)
console.log(anotherString);

const newStringOne = "  Indore  ";
console.log(newStringOne);// print with space
console.log(newStringOne.trim());// print without Space

const url = "https:// nirchoudhary/ExploreWith%20Nir.com"
console.log((url.replace("%20", "_")));//replace %20 to => _
console.log((url.includes("Rohit")));//replace %20 to => _


console.log(String.fromCodePoint(41));//
console.log(String.fromCodePoint(12));//
console.log(String.fromCodePoint(29));//
console.log(String.fromCodePoint(28));//
console.log(String.fromCodePoint(9));//
console.log(String.fromCodePoint(41));//
console.log(String.fromCodePoint(29));//
console.log(String.fromCodePoint(28));//
console.log(String.fromCodePoint(4.0));//
console.log(String.fromCodePoint(41));//
console.log(String.fromCodePoint(128525));//😍
// console.log(String.fromCodePoint(4.00));//

 const icons = '☃★♲';

 console.log(icons.codePointAt(0));

 

















