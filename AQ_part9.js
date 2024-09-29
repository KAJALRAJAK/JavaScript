//Qs1.CreateanewinputandbuttonelementonthepageusingJavaScriptonly.Setthetextofbuttonto“Clickme”;
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);


//Qs2.Addfollowingattributestotheelement:
//-Changeplaceholdervalueofinputto“username”

input.setAttribute("placeholder","usermane");

//-Changetheidofbuttonto“btn”

button.setAttribute("button","btn");


//Qs3.AccessthebtnusingthequerySelectorandbuttonid.Changethebuttonbackgroundcolortoblueandtextcolortowhite.

// let btn = document.querySelector("#btn");
// btn.classList.add("btn");


//Qs4.Createanh1elementonthepageandsetitstextto“DOMPractice”underlined.Changeitscolortopurple.

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</U>";
document.querySelector("body").append(h1);


//Qs5.Createaptagonthepageandsetitstextto“ApnaCollegeDeltaPractice”,whereDeltaisbold.

let para = document.createElement("p");
para.innerHTML = "<p>Apna Collage <b>Sigma</b> Practice</p>";
document.querySelector("body").append(para);