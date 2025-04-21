const user = {
    name :"sarowar",
    age:24,
    wellcomemessage:function(){
        console.log(this.name);
        console.log(this);
    }
}

// user.wellcomemessage()
// user.name ="sdhtgh"
// user.wellcomemessage()


// console.log(this);

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

const addtwo = (num1, num2) => (num1 + num2) // parenteases dosnt needed return statement.

console.log(addtwo(34, 5));

const add = () => {
    console.log(this, "add inside")
    return 5
}

console.log(add(), "add this");
