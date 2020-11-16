var x=0;
function string (num){
    while(x<num){
        if (x%2==0){
            console.log("even number",x);
        }else{
            console.log("odd number",x)
        }x++
    }

}
string(5);