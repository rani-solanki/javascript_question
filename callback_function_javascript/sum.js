function arr(callback){
    let a=0
    sum=0
    num=0
    while(a<100){
        if (a%2==0){
            console.log("even number",a)
            sum=sum+a
        }else{
            console.log("odd number",a)
            num=num+1
        }
        a++
    }
    callback(sum,num)
}
arr((sum,num) => {
    console.log("sum of the even number=>",sum)
    console.log("sum of the odd number=>",num)
})
