function  timeOut(t){
    const d = new Promise((resolve,reject)=>{
        var i=0
        while(i<t){
            if (i%2==0){
                console.log(i)
            }
            i++
        }
    })
    d.then((Message)=>{
        console.log(Message)
    }).catch((Message)=>{
        console.log(Message)
    })
}

timeOut(10)
