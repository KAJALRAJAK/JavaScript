let sum = 54; //Global Scope

function calSum(a,b) {
    let sum = a+b; //Function Scope
    console.log(sum);
}

calSum(2,5);

for(let i=0; i<=10; i++){
    console.log(i); //Block Scope
}
//Laxical scope
function outerFunc() {
    let x = 5
    let y =6;
    function innerFunc() { //Function scope
        let a =3 ;
        console.log(x);
        console.log(a);
    }
    innerFunc();
}

//pq
let greet = "hello"; //Global scope

function changeGreet() {
    let greet = "namaste"; //fuction scope
    console.log(greet);

    function innerGreet () {
        console.log(greet); //lexical scop
    }
    innerGreet();
}
console.log(greet);
changeGreet();