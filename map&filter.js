let arr = [1,2,3,4,5];
let double = arr.map(function(el){
    return el*el;
});
//example of map
let students = [{
    name : "kajal",
    marks : 92,
},{
    name : "karina",
    marks : 84,
},{
    name : "karan",
    marks : 96,
},];

let gpa = students.map((newMarks) => {
    return newMarks.marks /10;
});

//eg. of filter

let nums =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let ans = nums.filter((even) => {
    return even % 2 == 0;
});