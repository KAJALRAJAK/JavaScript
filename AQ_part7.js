//Qs1.WriteanarrowfunctionnamedarrayAveragethatacceptsanarrayofnumbersandreturnstheaverageofthosenumbers.
console.log("q.1");
const arrayAverage = (arr) => {
    let total = 0;
    for (let number of arr) {
        total += number;
    }
    return total/arr.length;
};

let arr =[1,2,3,4,5,6];
console.log(arrayAverage(arr));

//Qs2.WriteanarrowfunctionnamedisEven()thattakesasinglenumberasargumentandreturnsifitisevenornot.
console.log("q.2");
let num = 4;
const isEven = (num) => num % 2 == 0;

//Qs3.Whatistheoutputofthefollowingcode:
console.log("q.3");
const object = {
    message: 'Hello, World!',
        longMessage () {
            console.log(this.message);
        }
    };

    setTimeout(object.longMessage,1000);

 //Qs4.Whatistheoutputofthefollowingcode
console.log("q.4");
 let length =4;
function callback () {
    console.log(this.length);
}
const object2 = {
    length : 5,
    method : (callback) =>{
        callback();
    },
};

object2.method(callback,1,2);