/*
Nested if else
Nesting is writing if-else inside if-else statement. it chan have many levels

if marks >= 33
   if marks >= 80
      print "0"
    else 
      print "A"
else
   print "better luck next time!"
*/


let marks = 45;

if (marks>= 33){
    console.log("pass");
    if(marks>=80){
        console.log("A grade");
    }
    else if(marks>=60){
        console.log("B grade")
    }
    else{
        console.log("c grade");
    }
}
else{
    console.log("better time next time")
}