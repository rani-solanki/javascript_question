function gfg() {   
    let PMarks = 40  
    let result = (PMarks > 39)?  
        "Pass":"Fail";   
    console.log(result);  
    }   
    gfg();

let result = (10 > 0) ? true : false;
console.log(result)

var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"
// when we have value lessthan 21,print(Beer)
// otherwise juice

var year=34
var avarege = (year==67458)? "nav":"gurukul"
console.log(avarege)


// handling null value 
let greeting = person => {
    let name = person ? person.name : `stranger`
    return `Howdy, ${name}`
}

console.log(greeting({name: `Alice`}));
console.log(greeting(null));



var green = press=>{
    let n=press ? press.name:'sonam'
    return 'ranisolank',n
}
console.log(green({name:'ranisolanki'}));
console.log(green(null))

var y = (6>5) ? 6 : 5
console.log(y)

var det=(7>9)? 23:4
console.log(det)

var a=9
var b=3
var d = (a%b==0)?"rani":"solanki"
console.log(d)