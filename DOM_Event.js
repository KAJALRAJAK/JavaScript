let btns = document.querySelectorAll("button")
for(btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function() {
        console.log("you enter the button");
    }
}
// btn.onclick = function () {
//     alert("button was clicked");
// }

function sayHello() {
    alert("hello!");
}

//btn.onclick = sayHello;