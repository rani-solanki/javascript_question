var list=[[1,2,5,7],[1,2,3,4]]
var length=list.length
var i=0
while(i<length){
    var j=0
    sum=0
    while(j<length){
        sum=sum+list[j]
        console.log(sum)
        j++
    }
    // console.log(sum)
    i++

}
console.log(sum)
