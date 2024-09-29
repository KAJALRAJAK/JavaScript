// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// for(let i=0; i<arr.length; i++) {
//     if(arr[i] == num) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

// let length = 4;
// function callback (){
//     console.log(this.length);
// }
// const object = {
//     length: 5,
//     method (callback) {
//         callback();
//     },
// };

// object.method(callback,1,2);

// let students =[{
//     name : "kajal",
//     marks : 78,
// },{
//     name : "karina",
//     marks : 88,
// },{
//     name : "karan",
//     marks : 98,
// },]

// let gpa = students.map((el) => {
//     return marks / 10;
// });

let numbers=[1,2,3,4,5];
console.log(numbers.map((number)=>number+5));