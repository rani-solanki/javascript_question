function myFunction(callback){
    let sum = "rani solanki"+"shalindra aporiya"
    callback(sum)
}
function mycode(callback){
    let num = 23+45;
    callback(num)
}
myFunction((sum)=>{
    console.log(sum)
})
mycode((num)=>{
    console.log(num)
})
