for(let i=1; i<=10; i++){
    console.log(i);
}

for(j=10; j>=1; j--){
    console.log(j);
}
console.log("print odd 1 to 15")
for(k=1; k<=15; k=k+2){
    console.log(k);
}
console.log("print even 1 to 10")
for(k=2; k<=10; k=k+2){
    console.log(k);
}

console.log("print table of n")
let n = prompt("enter number:");
n = parseInt(n);//parseint gives integer value of string
for(i=n; i<=n*10; i=i+n){
    console.log(i);
}