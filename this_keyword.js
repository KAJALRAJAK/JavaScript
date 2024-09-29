const student ={  //object student
    name : "kajal",
    age : 23,
    eng : 92,
    math : 94,
    phy : 87,
    getAvg() { //cannot access parameters in function getAvg so , use "this" to access parameters
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);
    }
}