const marvel_heros = [ "Thor" , "Ironman", "Spiderman"]
const dc = [ "Batman" , "flash", "Superman"]

// marvel_heros.push(dc); //[ 'Thor', 'Ironman', 'Spiderman', [ 'Batman', 'flash', 'Superman' ] ]
// console.log(marvel_heros);

const AllHeros = marvel_heros.concat(dc)//[ 'Thor', 'Ironman', 'Spiderman', 'Batman', 'flash', 'Superman' ]
console.log(AllHeros);

//sprate

const All_new_Heros = [...marvel_heros, ...dc]
console.log(All_new_Heros);

const Next_Array = [1,1,2,3,4,[3,5,4,2,6,3[9,9,9,9]]]
const Next_another_array = Next_Array.flat(Infinity)
console.log(Next_another_array);

console.log(Array.isArray("Choudhary"));//false
console.log(Array.from("Choudhary"));//['c','h','o','u','d','h','a','r','i'] // convert into array

console.log(Array.from({name: "Nir"})); //interesting []




   




