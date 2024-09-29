const data = {
    email : "kajal@gmail.com",
    password : "kajal",
};

const dataCopy = {...data, id: 123};

//another eg.
let arr = [1,2,3,4,5]; //value
let obj = {...arr}; //obj -> key:value where key=index and value = arr

let obj1 = [..."hello"];