function sum(a,b) {
    console.log(a+b);
}
sum(4,8);


function sum2 (a,b) {
    console.log("hello");
    console.log("hello");
    return (a+b);
    console.log("hello");
    console.log("hello");
}
console.log(sum2(5,8));
//console.log(sum2(sum2(5,8),4));

function isAdult (age) {
    if(age >= 18) {
        return "adult";
    } else {
        return "not adult";
    }
    console.log("bye bye");
}
//creat a Fuction thaat return the sum of numbers from 1 to n.
function getSum (n) {
    let sum = 0;
    for(let i=0; i<=n; i++) {
        sum +=i;
    }
    return sum;

}
//PQ
console.log("Creat a Function that return the concatenation of all strings in an array");
let arr =["kaj","al","raj","ak"];

function concat(arr) {
    let result = " ";

    for(let i=0; i<=arr.length; i++) {
        result += arr[i];
    }
    return result;
}
   