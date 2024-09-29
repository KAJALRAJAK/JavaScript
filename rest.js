function sum (...args) {
    for (let i = 0; i < args.length; i++) {
        console.log("welcome here!",args[i]);
    }
}

function min (b,m,n,j) {
    console.log(arguments);// argument is a collection
    console.log(arguments.length);
}

function sum2 (...args) {
    return args.reduce((sum,el) => sum + el);
}

function min (...args) {
    return args.reduce((min,el) =>{
        if(min > el) {
            return el;
        }else {
            return min;
        }
    });
}