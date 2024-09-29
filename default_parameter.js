function sum (a,b=5) {
    return a+b;
}
console.log(sum(5));

//another case
function sum (a=1,b) {
    return a+b;
}
sum(1,3);//4
sum(1);//a = 1, b = undefined 