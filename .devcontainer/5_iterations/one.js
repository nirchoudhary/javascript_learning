//  for( let i = 0; i<=10; i++){
//     const element = i;
//     if (element == 5) {
//         console.log(`${element} is Best Number"`);        
//     }
//     console.log(element);
    
//  } 

for (let i = 1; i <=10; i++) {
   // console.log(`outer element : ${i}`);
    for (let j = 1; j <=10; j++) {
   // console.log(`Inner Element :${j}`, `This is a outer Element${i}`); 
   //  console.log(i+'*'+ j + '=' + i*j);
       
    }   
}

for (let i = 0; i <= 20; i++) {
   if (i == 5){
   console.log(`Detected :${i}`);
   break;
}
console.log(`Value of i IS :${i}`);

}

