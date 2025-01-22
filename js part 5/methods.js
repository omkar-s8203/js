/**
 * Action that can be performed on an object
 */

const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    }
}

let add= calculator.add(55588,59);
console.log(add);