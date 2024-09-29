//Event Listener
//-mouseout



//Qs2.CreateabuttononthepageusingJavaScript.Addaneventlistenertothebuttonthatchangesthebutton’scolortogreenwhenitisclicked.

let btn = document.querySelector(".btn");

btn.addEventListener("click",function () {
    btn.style.backgroundColor = "green";
});


//Qs3.Createaninputelementonthepagewithaplaceholder”enteryourname”andanH2headingonthepageinsideHTML.Thepurposeofthisinputelementistoenterauser’snamesoitshouldonlyinputlettersfroma-z,A-Zandspace(allothercharactersshouldnotbedetected).Whenevertheuserinputstheirname,theirinputshouldbedynamicallyvisibleinsidetheheading.[Pleasenotethatnoothercharacterapartfromtheallowedcharactersshouldbevisibleintheheading]

let inp = document.querySelector("input");

let h2 = document.querySelector("h2");

inp.addEventListener("input",function () {
    console.log(inp.value);
    h2.innerText = inp.value;
});