const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}
 
const obj3 = Object.assign(obj1, obj2) // assign always take 1st input as target and others are source. in this case obj1 is target object where all copies will includes.
const obj4 = Object.assign({}, obj1, obj2) // this is good practice as documentry says, cause there is an empty obj for target. 
const obj5 = {...obj1, ...obj2} // easy way , most cases we will use this.

console.log(obj3, "|||||" , obj4, "|||||" , obj5); // All result are same.
