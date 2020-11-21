var person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  console.log(person1.fullName.call(person2));  // Will return "John Doe"
  
  
"use strict";
var x = this;
console.log(x)

