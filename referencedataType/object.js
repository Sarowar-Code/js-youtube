/*
>> Objects

*/
const mysym = Symbol("key1")


const myself = {
    name :"Sarowar Hossain",
    age : 24,
    mysym,
    location:"hathazari",
    email:"sarowar23452@gmail.com"
}

// Pushing a function into obj
myself.greeting = function () { 
    console.log("Hello js user");
}

console.log(myself.greeting());
console.log(myself);
// console.log("asbvasb");


// myself["email"] = "skbgasdgb@hill.com"
// Object.freeze(myself) //this object got freeze, we cannot change anything from this object after this line.

/*
>> Both works same , cause when we decleared a property in obj like this with a sapcebetween wirds, it should wrote like this
 O "short name" : "sarw" 
 X  short name : "sarw" 
 / it cannot called like this
 o objName["short name"]
 Not this  
 x objName."short name" / objName.short name o WRONG o

console.log(myself.name);
console.log(myself["name"]);

*/