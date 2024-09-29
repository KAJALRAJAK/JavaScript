let btn = document.querySelector("button");

btn.addEventListener("click",function (event) {
    console.log(event);
    console.log("button clicked")
});

btn.addEventListener("dblclick",function (event) { //mouseevent
    console.log(event);
    console.log("button clicked")
});

//keyboard Event
 let inp = document.querySelector("input");
 
 inp.addEventListener("keydown",function () {
    console.log("key was pressed");
 });

 inp.addEventListener("keyup",function (event) {
    console.log(event);
    console.log("key =",event.key);
    console.log("code =",event.code);
    console.log("key was released");
 });
//ArrowUp(U),Arrowdowm(D),Arrow(L),Arrow(R)
 inp.addEventListener("keyup",function (event) {
    console.log("code =",event.code);
    if(event.code =="KeyU") {
        console.log("character moves up");
    } else if(event.code =="KeyD") {
        console.log("character moves down");
    } else if(event.code =="KeyL") {
        console.log("character moves left");
    } else if(event.code =="KeyR") {
        console.log("character moves right");
    }       
});