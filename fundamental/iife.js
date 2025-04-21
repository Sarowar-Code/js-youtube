// Immediately Invoked Function Expression!

/*

Avoid global scope pollution>> Variables declared inside an IIFE are local to that function.
They don't become global variables, preventing accidental overwriting of other variables in your code or in third-party libraries.

Encapsulate code>> You can group related pieces of code together and keep their internal workings hidden from the outside.
This promotes modularity and makes your code easier to manage.

*/

(function sum (){
    console.log("iife");
})(); // semicolon is must for ending the function , cause editor do not suggest.
((name) => { 
    console.log(name);
})("sarw") // the way passing parameters

// () 1st is defenation
// () 2nd is execution