// Array

const myArray = [0, 1, 2, 34, 53, 435]

// console.log(myArray);

// myArray.push(9)
// myArray.pop()

// myArray.unshift(10)
// myArray.shift()

// console.log(myArray.indexOf(2) === 2);
// const newArray = myArray.join()

// console.log(newArray);

// const slicearr = myArray.slice(2, 5)
// console.log("A", myArray);

// const slicearr2 = myArray.splice(2, 5)
// console.log("B", myArray);

marvel_heroes = ["Iron Man", "Captain America", "Spider-Man", "Thor", "Hulk", "Doctor Strange"]

dc_heroes = ["Superman", "Batman", "Flash", "Aquaman", "Green Lantern"]


// marvel_heroes.push(dc_heroes) X

// const all_heros = marvel_heroes.concat(dc_heroes) unMute main array.
// ===
// const all_heros = [...marvel_heroes, ...dc_heroes] same as concat methode , but short syntx

const anotherArray = [1, 2, 4, [45, 65, 43], 3, 55, 3234, [34, 54, 554, [30, 45, 5]]]

const flatArray = anotherArray.flat(2) // depth-2 [ 1,   2,  4, 45, 65, 43, 3, 55, 3234, 34, 54, 554, 30, 45, 5 ] 

console.log(flatArray);


// Next i sould learn Array.inArray | .from | .of 

