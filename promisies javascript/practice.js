// const myPromise = new Promise((resolve, reject) => {  
//     // condition
// });

const myPromise = new Promise((resolve, reject) => {  
    let condition;  
    
    if('condition is met') {    
        resolve('Promise is resolved successfully.');  
    } else {    
        reject('Promise is rejected');  
    }
});
myPromise.then((Message)=>{
    console.log("Rani solanki" + Message)
}).catch((Message)=>{
    console.log("Rani solanki" + Message)
})