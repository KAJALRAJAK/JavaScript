let form = document.querySelector("form");

form.addEventListener("submit",function () {
    event.preventDefault();
    alert("form submitted");
});