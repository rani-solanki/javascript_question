Arr=[2,5,78,3,4,9]
element=(Arr.length)-1
console.log(element)
index = 0
new_arra=[]
while(index < Arr.length){
    new_arra.push(Arr[element])
    index=index+1
    element=element-1
}
console.log(new_arra)
