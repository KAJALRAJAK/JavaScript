function hello() {
    console.log("kajal");
    console.log("rajak");
}
hello();
hello();
hello();
hello();
hello();

function printName() {
    for(let i=1; i<=5; i++) {
        console.log(i);
    }
}
 printName();

 function isAdult () {
    let age =18;
    if(age>=18) {
        console.log("adult");
    }else {
        console.log("not adult");
    }
 }
 isAdult();

 //Create a Function to roll a dice & always display the dice (1 to 6)
 function rollDice () {
    let dice = Math.floor(Math.random()*6)+1;
    console.log(dice);
 }
 rollDice();
 rollDice();
 rollDice();
 rollDice();//4 players play and throw dice

 //Function with Argument
 function printInfo(name,age) {
    console.log(`name ${name} age is ${age} .`);
 }
printInfo("Kajal",21);

//sumation
function sum (a,b) {
    console.log(a+b);
}
sum(5,6);
sum(7,4);
sum(9,5);

//Create a Fucntion that us average of 3 numbers .
function avg(a,b,c) {
    avrage = a+b+c/3;
    console.log(avrage);
}
avg(8,2,5);

//Creat a Function tha prints the multiplication table of a number.
function table(n) {
    
    for(let i=n; i<=n*10; i=i+n){
        console.log(i);
    }
}
table();