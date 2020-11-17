var Arr=[1,2,4,5,7,6,3,4,2,1,1,2,1,2,19]
console.log(Arr.length)
var i=0;
var next_array=[]
while(i<Arr.length){
    var j = 0
    var count=0;
    while(j < Arr.length){
        if(Arr[i]==Arr[j]){
           count=count+1
        }
        j++
    }
    var k =Arr[i],count;
    if (!(k in next_array)){
        next_array.push(k)
    }
    i++
}
console.log(next_array)






