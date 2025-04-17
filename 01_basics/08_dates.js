
const mydate = new Date("12-01-2025")

console.log(mydate.toDateString()); // Mon Jan 23 2023
console.log(mydate.toISOString()); // 2023-01-23T00:00:00.000Z
console.log(mydate.toLocaleDateString()); // 1/23/2023
console.log(mydate.toLocaleString()); // 1/23/2023, 12:00:00 AM
console.log(mydate.toLocaleTimeString()); // 12:00:00 AM
console.log(mydate.toString()); // Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toTimeString()); // 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toUTCString()); // Mon, 23 Jan 2023 00:00:00 GMT
console.log(mydate.getTimezoneOffset()); // 0
console.log(typeof mydate); // object



let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getSeconds());
