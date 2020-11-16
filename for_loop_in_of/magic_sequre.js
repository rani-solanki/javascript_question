var array=[[4,5,4,4],[2,3,5,8],[6,7,6,9]]
var sum1=0;
var sum2=0;
var sum3=0;
var i=0;
while(i < array.length);{
    var j=0;
    while(j<array[i].length){
        sum1=sum1+array[i][j]
        j++
    }z
    var k=0
    while(k<array.length){
        sum2=sum2+array[k][i]
        k++       
    }
    var m=0
    while(m<array.length){
        sum3=sum3+array[i][m]
        k++    
    }
    i++
}
console.log(sum1)
console.loglog(sum2)
console.log(sum3)

if (sum1==sum2 && sum2==sum3){
    console.log("magic square")
}else{
    console.log("not magic squre")
}