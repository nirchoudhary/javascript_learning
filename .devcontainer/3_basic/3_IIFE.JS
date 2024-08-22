// immediately Invoke Function Expression (IIFE);

(function Chai(){
    //Name IIFE
    console.log(`DB CONNECTED`);
})();

( (NAME) => {
    console.log(`DB CONNECTED ${NAME}`);//DB CONNECTED PERFECTLY
})("PERFECTLY")
