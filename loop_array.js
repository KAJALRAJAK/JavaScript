let fruits = ["mango","apple","banana","litchi","orange"];
for(i=0; i<fruits.length; i++){
    console.log(i,fruits[i]);
}
for(i=fruits.length-1; i>=0; i--){
    console.log(i,fruits[i]);
}
//Nested loop with arrayas
let heroes= [["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
for(i=0; i<heroes.length; i++){
    console.log(`List:${i}`);
    for(let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j])
    }

}