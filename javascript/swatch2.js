// var s=require("readline-sync");
// var d=s.question("enter the number");
// switch(new Date().getDay()){
//     case d==0:
//         return "first";
//         break
//     case d==9:
//         return "second";
//     case d==4:
//         return "thired";
// }

var d=require("readline-sync");
var day1 = d.question("enter the number")
switch(day1) {
    case day1==0:
        day = "monday"
        console.log(day)
    break;
    case day1==1:
      day = "Monday";
      console.log(day)
    break;
    case 2:
       day = "Tuesday";
       console.log(day)
    break;
    case 3:
      day = "Wednesday";
    break;
    case 4:
      day = "Thursday";
    break;
    case 5:
      day = "Friday";
    break;
    case 6:
      day = "Saturday";
}