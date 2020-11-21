array=["rani","solanki","softwareengineering","navgurukul","bangalore"]
var i = 0
even_sum = 0
odd_sum = 0
while(i<array.length){
    let j =0
    var count=0
    while(j<array[i].length){
        count=count+1
        j++
    }
    if (count%2==0){
        even_sum=even_sum+count

    }else{
        odd_sum=odd_sum+count
    }
    i++
    
}
console.log(even_sum)
console.log(odd_sum)


