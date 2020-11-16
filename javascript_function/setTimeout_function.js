// for(var i=0;i<8;i++){
//     setTimeout(()=>console.log(i),1000)
//   }

  // var array = [1, 2, 3, 4,5]
  // for(var i = 0; i < array.length; i++) {
  //   setTimeout(() => 
  //     console.log(i)
  //   , 1000)
  // }

  // print number element
var array = [1, 2, 3, 4, 5]
for(var i = 0; i < array.length; i++) {
  delay(i)
}
function delay(i) {
  setTimeout(() => {
    console.log(array[i])
  }, 1000);
}

// print of index number
var array = [1, 2, 3, 4, 5]
for(let i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(array[i])
  }, 1000);
}


// print array element
var array=["python","java","javascript","nodejs"]
for (var x=0; x<array.length; x++){
  delay(x)
};
function delay(x){
  setTimeout(()=>{
    console.log(array[x])
  },1000);
}

var mixed_array =[,2,4,3,6,7,8]
var j=0
while(j<mixed_array.length){
  var w=mixed_array[j];
  if (w%2==0){
    console.log("even",w)
  }else{
    console.log("odd",w)
  }
  j++
}


