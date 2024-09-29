let i=1;
while(i<=10){
    console.log(i);
    i++;
}
console.log("reverse");
let j=10;
while(j>=1){
    console.log(j);
    j--;
}
//guss favorite movie
let favMovie="siddat";
let guess = prompt("enter my favorite movie");
   while(guess != favMovie){
   if(guess == "quit"){
    console.log("you quit")
   }
   guess = prompt("wrong guess .Please try again");
   }
   if(favMovie == guess){
    console.log("congrate!")
   }else{
    console.log(" you quit");
   }
   //break keyword
   console.log("break keyword");

   let k=1;
   while(k<=5){
    if(k ==3 ){
        break;
    }
    console.log(k);
    k++;
}

