var x = this;
console.log(x);

function myFunction(){
    return this;
  }
d=myFunction();
console.log(d)

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

showMessage(); // Hello, John

function submittedData() {
  var a = document.getElementById("input_id").value;
  console.log(a);
}
submittedData()

    
