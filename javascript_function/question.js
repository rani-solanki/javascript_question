function shaw(a){
    var i=0;
    var list=[]
    while(i < a.length){
        list.push(a[i])
        i++
    }
    return list
}
result=shaw(["rani","solanki",23,876,4,87])
result.unshift("4")
console.log(result)

// use of shift function for remove element 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits)
