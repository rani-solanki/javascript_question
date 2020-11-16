var list=[9,0,3,5,6]
var i=0
max=0
var j=list.length
while(i<j){
    var k=0
    while(k<j){
        if (list[i] < list[j]){
            max =list[i]
            console.log(max)
            k++
        }
        i++
        console.log(max)
    }

}