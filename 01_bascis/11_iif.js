//***************** Immediately Invoked Function Expressions (IIFE)*/
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();