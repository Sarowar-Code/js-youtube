/*

function sumision (num1, num2){
 console.log(num1 + num2, "console print" ); // console is to print the value only, we cannot store the value in a variable.
 return num1+num2 // now we can store the function as a value, But cannot print with the return. 
 
 console.log("adshfbvi"); // Not working ... cause its after the return statement.

// return is the exit of a fuction , if we code after the return statement, those code will not wirk. cause return is exit point. 
}

const num = sumision(2, 5)
console.log(num);


>>> ABOUT RETURN 

function loggeduser (userName) { 

if(!userName){
return "please enter useName" // when if condition will work , the function will end here.
}

return userName // when if condition will work , this return will not work.
}

loggeduser()


>>> IMPORTANT NOTE

function multiply(num1, num2){
return num1+num2
}

multiply(3, 5) // it wont print anything in the browser, cause its return value , it should stored in a variable or console.log
console.log(multiply(3, 5)) // this will print.

const newnum = multiply(3, 5) // Works.
console.log(newnum) // this also work

*/

/*

function loggeduser (userName) {
console.log(userName);
}

loggeduser() // in this case it will show undefined...

*/

/*

>> we can set a default parameter , if not value pased as parameter it will take the "sarw" , example down below.
function loggeduser (userName = "sarw") { 
console.log(userName);
}

loggeduser()

>>> REST OPERATOR
**rest operatior return values as an Array

function numbers (...num){
return num
}

const newnumn = numbers(23, 45, 444, 555)
console.log(newnumn); // [ 23, 45, 444, 555 ]

*/

function numbers (num1, num2, ...num){
    return num // [544,5454]
}

console.log(numbers(23,34,544,5454));
