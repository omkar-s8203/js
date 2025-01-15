/**
 * list - to show all todos
 * add - to add a todo
 * delete- to delete a task
 * quit - to exit the todo
 */

let todo = [];

let req = prompt("please enter your request");

while (true) {
    if (req == "quit") {
        console.log("quiting app");
        break;
    }

    if (req == "list") {
        console.log("-------------all tasks------")
        for (task of todo) {
            console.log(task);
        }
        req = prompt("please enter your request");
    } else if (req == "add") {
        let task = prompt("please enter task you want to enter");
        todo.push(task);
        console.log("task added");

        req = prompt("please enter your request");
    }else if(req == "del"){
        let task = prompt("enter the task that wanted to delete");
        todo.pop(task);
        console.log("Task deletd")

        req = prompt("please enter your request");
    }else{
        console.log("invalid request");

        req = prompt("please enter your request");
    }
   
}