var Array=[1,3,5,"navgurukul",76,8,"string"];
Array.forEach((value) => {
    console.log(value)
})

var someValue=[1,2,3,1,4,2,5,6,7];
var sum=0
var multiple=1
for(var i=0; (i<someValue.length);i++ ){
    sum=sum+someValue[i]
    multiple=multiple*someValue[i]
}
console.log("sum of list element",sum,"multiple of list element",multiple)


var someValues = [1, 'abc', 3, 'sss'];
someValues.forEach((element) => {
    console.log(element);
});
someValues.forEach((element, index) => {
    console.log(`Current index: ${index}`);
    console.log(element);
});