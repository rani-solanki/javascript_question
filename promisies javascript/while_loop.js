const d = new Promise((resolve,reject) => {
    var i=0
    while(i<10){
        if ('condition') {
            resolve("res")
        }else{
            reject("hkgdk")
        }
        i++
        console.log(i)
    }
})
d.then((message)=>{
    console.log(message)
}).catch ((message)=>{
    console.log(message)
})
