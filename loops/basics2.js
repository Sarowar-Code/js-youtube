const newarr = ["asa", "ds", "de", "ef"]
const objects = [
    {
        name: "Sarowar",
        age: 24
    },
    {
        name: "Sakib",
        age: 24
    },
    {
        name: "Rafi",
        age: 24
    },
    {
        name: "Imran",
        age: 24
    }
]


// forEach in Array

newarr.forEach( (item, index, arr) => { // 3rd parameter is full array
    // console.log(`${item} is in ${index}`);
    // console.log(arr);
} )

// forEach in array of Object 

objects.forEach((item)=> {
    console.log(item.name);
})