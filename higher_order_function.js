//1- takes one or multiple function as arguments
function multipleGreet(func,n) {
    for(let i=1; i<=n; i++) {
        func();
    }
}

let greet = function() {
   console.log("hello");
    
}

multipleGreet(greet,2);

//return as function
function oddOrEvenFactry(request) {
    if(request == "odd") {
        let odd = function(n) {
            console.log(!(n%2 == 0));
        }
        return odd;
    }else if(request == "even") {
        let even = function(n) {
            console.log(n%2 == 0);
        } 
        return even;
    }else {
        console.log("wrong request");
    }
}