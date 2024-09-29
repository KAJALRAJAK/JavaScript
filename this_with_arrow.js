const student = {
    name : "kajal",
    marks : 90,
    prop : this, //global scope
    getName : function() {
        console.log(this);
        return this.name;
    },
    getMarks : ()=> {
        console.log(this);//parent scope(for arrow function,student is parent and parent is global scope)
        //parent scope-> window
        return this.marks;
    },
    getInfo1 : function () {
        setTimeout(() => {
            console.log(this);//student
        },2000);
    },

    getInfo2 : function () {
        setTimeout( function ()  {
            console.log(this);//window
        },2000);
    },
};

const a = 47 ; //golbal scope
