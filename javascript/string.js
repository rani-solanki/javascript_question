str = " "
a=require("readline-sync")
b=a.question("ente the letter")
// console.log(b)

var i = 0;
while(i<b){
    // console.log(i)
    var j=0
    while(j<i){
        str=str + "*"
        console.log(str)
        j++
    }
    i++
}

