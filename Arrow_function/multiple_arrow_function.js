let sum = (a, b) => { 
    // the curly brace opens a multiline function
    let result = a + b;
    return result; 
    // if we use curly braces, then we need an explicit "return"
  };
  
  console.log( sum(1, 2) ); // 3

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );

let add = (x,y) => x + y;
console.log(add(10,20)); // 30;


