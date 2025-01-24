/**
 * This keyword
 * "this" keyword refers to an object that is executing the current piece of code
 */

const student = {
    name: "omkar",
    age: 23,
    eng: 65,
    math: 24,
    phy: 54,
    getAvg(){
        console.log(this);
        let avg= (this.eng+this.math+this.phy)/3;
        console.log(this.name);
    }
}

student.getAvg();