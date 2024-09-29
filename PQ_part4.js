//Qs1.
// let arr = [1,2,3,4,5,6,2,3];
// let n=2;
// let i=1;
// while(i<arr.length){
//     if(i == n){
//         break;
//     }
// }
// console.log(arr);

console.log("question no_1")
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i=0; i<arr.length; i++) {
    if(arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(arr);

//question no.2
console.log("question no. 2");

let n = 287152;
let count = 0;

let copy = n;
while(copy>0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);

//question no->3
console.log("question no.3")

let sum = 0;
 let cop=n;
while(cop>0){
    let digit = cop%10;
    sum += digit;
    cop =Math.floor(cop/10);
}
console.log(sum);

//question no->4
console.log("question no.4")
let fect = prompt("enter number:");
let fectorial =1;
for(let i=1; i<=fect; i++) {
    fectorial *=i;
}
console.log(`fectorial of ${fect} is ${fectorial}`);

//question no->5
console.log("question no.5")
let array = [5,8,3,12,9,4];
let largest = 0;
for(let i=0; i<=array.length; i++) {
    if(largest < array[i]){
        largest = array[i];
    }
}
console.log(largest);

