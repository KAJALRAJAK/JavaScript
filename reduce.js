let arr = [2,1,3,4];
console.log(arr.reduce((sum,el) => (sum+el)));

//find maximum in array
let arr2 = [5,7,8,9,7,12,3,7];
let max = 0 ;
for(let i=0; i<=arr2.length; i++){
    if(max<arr2[i]) {
        max +=arr2[i];
    }

}
console.log(max);
//or
let arr3 = [5,7,8,9,7,12,3,7];   
arr3.reduce((max,el) =>{
    if(max< el){
        return el;
       }else{
        return max;
       }
    });

   console.log(max);