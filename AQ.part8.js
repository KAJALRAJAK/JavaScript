//Qs1.Squareandsumthearrayelementsusingthearrowfunctionandthenfindtheaverageofthearray.
let nums = [1,2,3,4,5];
let square = nums.map (function (el) {
    return el*el;
});

let sum = nums.reduce((sum,el) => (sum+el));
let avg = sum/nums.length;
console.log(avg);

//Qs2.Createanewarrayusingthemapfunctionwhoseeachelementisequaltotheoriginalelementplus5.
let arr = [1,2,3,4,5];
let newArr = arr.map(function(el) {
    return el+5;
});
console.log(newArr);
//or
console.log(arr.map((arr) =>arr +5));

//Qs3.Createanewarraywhoseelementsareinuppercaseofwordspresentintheoriginalarray.
let str = ["kajal","karan","karina","mansi","tanuja"];
console.log(str.map((str) => str.toUpperCase()));

//Qs4.WriteafunctioncalleddoubleAndReturnArgswhichacceptsanarrayandavariablenumberofarguments.Thefunctionshouldreturnanewarraywiththeoriginalarrayvaluesandalloftheadditionalargumentsdoubled.
const doubleAndReturnArgs = (arr,...args) => [...arr,args.map((v) => v*2)];
doubleAndReturnArgs([1,2,3],4,5);
doubleAndReturnArgs([2],10,4);

//Qs5.WriteafunctioncalledmergeObjectsthatacceptstwoobjectsandreturnsanewobjectwhichcontainsallthekeysandvaluesofthefirstobjectandsecondobject.
const mergeObjects = (obj1,obj2) =>({...obj1,obj2});
mergeObjects ({
    a : 1,
    b : 2
},
{
    c : 3,
    d : 4
});