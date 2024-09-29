//write an arroww function that return the square of a number 'n'.
const cube = (n) => (
    n*n*n
);

//write a function that prints "Hello World" 5 times at intervals of 2s each.

let id = setInterval (() => {
    console.log("Hello World");
}, 2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval");
}, 10000);