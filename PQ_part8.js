//check if numbers in ur array are multiples of 10 or not.
let nums =[10,20,30,40];

let ans = nums.every((el) => el % 10 == 0);
console.log(ans);

//creat a function to find the min number in an array.

let arr = [2,4,9,7,1,8,3,];

let min = arr.reduce((min,el) => {
    if(min < el){
        return min;
    }else{
        return el;
    }
    });

    console.log(min);

//or

function getMin(arr2) {
    let min2 = arr2.reduce((min2,el) => {
        if(min2 < el){
            return min2;
        }else{
            return el;
        }
        });
     return min2;   
}
let arr2 = [2,4,9,7,8,3,];

