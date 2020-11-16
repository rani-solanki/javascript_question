for (i = 0; i < 5; i++) {
  console.log(i);
}


// use of for in loop
var num = 0;
for (num in [2,4,6,7])
    console.log(num)

// use of for of loop
for (m of "navgurukul"){
    console.log(m)
}


// use of do_while loop
let j=0;
do {
  if (j%2==0){
    console.log("even number",j)
  }else{
    console.log("odd number",j)
  }
  j++
}while(j<10);

// use of while loop
var i=0
while(i<10){
    if (i%2==0){
      console.log("even",i)
    }else{
      console.log("odd",i)
    }
    i++
}

// use of function
var x=0;
function string (num){
    while(x<num){
        if (x%2==0){
            console.log("even number",x);
        }else{
            console.log("odd number",x)
        }x++
    }

}
string(5);

a = 0
console.log(a)

