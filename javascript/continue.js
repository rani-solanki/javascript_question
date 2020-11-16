for (var i=0; i<10; i++){
if (i==3) {
    console.log("equal to 3",i)
    continue
}else{
    console.log(i)
}
}

var j=0;
while(j<10){
    if (j==3){
        console.log(j)
        j++
        continue
    }else{
        console.log(j)
    }
    j++
}