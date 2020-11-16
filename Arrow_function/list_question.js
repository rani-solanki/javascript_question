var Array =["python","java","css",56,34,98]
Array.forEach((i)=>{
    if (i%2==0){
        console.log("even",i)
    }else{
        console.log("odd",i)
    }
})


var someValues = [1, 'abc', 3, 'sss'];
someValues.forEach((element) => {
    console.log(element);
});
someValues.forEach((element, index) => {
    console.log(`Current index: ${index}`);
    console.log(element);
});
