const student = {
    name : "kajal",
    class : 10,
    age : 15,
    subjects : ["hindi","english","math","science","social science"],
    username : "kajal123",
    password : 1234,
};

const {username : user,password : pass, city = "mumbai"} = student;

console.log(user);