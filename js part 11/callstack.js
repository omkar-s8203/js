function one(){
    console.log("in function one")
    return 1;
}

function two(){
    console.log("in function two")
    return one()+one();
}

function three(){
    console.log("in function three");
let ans = two() + one();
console.log(ans);
}

three();


