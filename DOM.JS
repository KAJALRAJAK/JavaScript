let smallImages = document.getElementsByClassName("oldImg");

 for(let i = 0; i < smallImages.length; i++) {
//     console.dir(smallImages[i].src);
 
//or
smallImages[i].src = "spiderman_img.png";
console.log(`value of image no.${i} is changed.`);

 }

 //Query Selector
 console.dir(document.querySelector("h1"));//select first p element

 console.dir(document.querySelector("#description")); //select 1st element with id = myId

 console.dir(document.querySelector(".oldImg"));//select all p element

 console.dir(document.querySelector("div a")); //gives 1st anchor tag inside the div

 console.dir(document.querySelectorAll("div a")); //gives all anchor tag inside the div

 console.dir(document.querySelectorAll("h1"));


 //manipulation style->style property
 let links = document.querySelectorAll(".box a"); 
 for(let i = 0; i < links.length; i++) {
    links[i].style.color = "purple"; //only inline style set
 }
 //or
 for(link  of links) {
    link.style.color = "green";
 }