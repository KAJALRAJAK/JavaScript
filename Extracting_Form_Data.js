let form = document.querySelector("form");

form.addEventListener("submit",function (event) {
    event.preventDefault();

    let user= this.elements[0] //  this = form can write anything //"or" document.querySelector("#user");
    let pass =this.elements[1]//"or" document.querySelector("#pass");
    //console.dir(user);
    //console.log(inp.innerText);
    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value},your password is set to ${pass.value}`);
});

