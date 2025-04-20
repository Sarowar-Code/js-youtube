// Scope

// {} curly breases are the scope. 
// Inner is Block Scope and Outer is Global scope.
// block scope can access global scope variables, where as global scope cannot.


if(true){
    let a = 10
    const b = 20
    var c = 30
}


// console.log(a); // cannot print
// console.log(b); // cannot print
// console.log(c); // 30 >> usally var isn't maintain the scope. Thats the reason coders avoid using var.

// +++++++++++++++++ Scope and Mini Hoisting +++++++++++++++++++++++ 

if(true){
    const username = "Sarowar"
    if(username === "Sarowar"){
        const website = "youtube"
        console.log(username +" "+ website); // Sarowar youtube
    }
     // console.log(website); website is not defined
}
// console.log(username); username is not defined


// ++++++++++++++++++ Intersting +++++++++++++++++++++++

function addone (num){ 
    return num + 1
}

addone(5)

