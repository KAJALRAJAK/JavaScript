//1-> slice
let array=[7,9,0,-2];
console.log(array.slice(0,3));
//or
let arr=[7,9,0,-2];
//n=3;
let ans=arr.slice(0,3);
console.log(ans);


//2
let num=[7,9,0,-2];
let New=num.slice(1,num.length);
console.log(New);

//3
let str=prompt("Write here a string");
if(str.length==0){
    console.log("string is empty");
}
else{
    console.log("string is not empty")
}

//4
let name = "KajalRajak";
let idx = 5 ;
if(name[idx] == name[idx].toLowerCase()){
    console.log("charecter is lowercase");
}else{
    console.log("charecter is not lowercase");
}

//Qn.5
let stri = prompt("Please enter a string");
console.log(`original string = ${stri}`);
console.log(`string without space = ${stri.trim()}`);

//Qn.6->
let elem = [2,5,8,6];
let ind = 5;
if(elem.indexOf(ind) != -1){
    console.log("elememnt is exist")
}else{
    console.log("elememnt is not exist") 
}



