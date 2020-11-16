function issum(callback){
    sum=12+13
    callback(sum)
}
issum((sum) => {
    console.log(sum-10)
})


function isnum(callq){
    n=23*89
    callq(n)
}
isnum ((n) => {
   console.log(n-23)
})