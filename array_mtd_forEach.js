let arr =[1,2,3,4,5];

// arr.forEach(function(el){
//     console.log(el);
// });

//OR

let print = function (el) {
    console.log(el);
};
arr.forEach(print);

// examle
let arr2 = [{
    name : "kajal",
    marks : 92,
},{
    name : "karina",
    marks : 84,
},{
    name : "karan",
    marks : 96,
},];

arr2.forEach((student) => {
    console.log(student.marks);
});