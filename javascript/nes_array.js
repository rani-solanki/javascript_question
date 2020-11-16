array=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
var i=0
while(i<array.length){
    var j=2
    while(j< array[i].length){
        var d = array[i][i]
        console.log(d)
        break
        j++
    }
    i++
    
}