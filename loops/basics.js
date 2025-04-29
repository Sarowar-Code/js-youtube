// for 

for (let i = 0; i <= 10; i++) {
    if(i == 4){
        // console.log(`detected ${i}`);
        // break // lop will stops at this condition.
        continue // it will spik 4 , 
    }
    // console.log(`num ${i}`);
    
}


// While Loop

let i = 0
while (i <= 20) {
    // console.log(`index value is ${i}`);
    i = i + 2
}

// do while
// do {
    
// } while (condition);


// for of

// const arr = [1, 3, 4, 5, 6, 7]

// for (const value of arr) {
//     console.log(value);
// }

// const words = "greetings"
// for (const word of words) {
//     console.log(word);
// }

const map = new Map()

map.set("country", "Bangladesh")
map.set("brand", "mi")
map.set("relig", "islam")

for (const [key, value] of map) {
    // console.log(key, ":" , value);
}

// forOf is not applicable for object.


const myobj = {
    name:"Sarowar",
    age:24,
    school:"hpmhs"
}

for (const key in myobj) {
    // console.log(key); // it will print keys only
    // console.log(`${key} value is ${myobj[key]}`);
}

for (const key in map) {
    console.log(key); // empty 
    // map is not iterable.
}



const newarr = ["asa", "ds", "de", "ef"]

for (const key in newarr) {
    // console.log(key); // 0,1,2,3 
    // console.log(newarr[key]); // asa ds de ef
}