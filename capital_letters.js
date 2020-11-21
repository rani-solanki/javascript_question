var d = require("readline-sync");
var user = d.question("enter the string:>")
var i=0
var count_upper=0
var count_lower=0
while(i<user.length){
    if (user[i]==user[i].toUpperCase()){
        count_upper=count_upper + 1
    }else if(user[i]==user[i].toLowerCase()){
        count_lower=count_lower + 1
    }
    i++
}
console.log("upper letter:>",count_upper)
console.log("lower letter:>",count_lower)