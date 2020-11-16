str="2345245363"
arr=Array(str)
console.log(arr)

function multiple(f){
    let a=0
    let add=0
    while(a<10){
        add=add+a
        a++
    }
    f(add)

}
multiple((add)=>{
    console.log(add+100)
})