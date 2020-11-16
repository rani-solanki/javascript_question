// const myPromise = new Promise((resolve,rejects))
//     let connection=true;
//     if(constructor(connection)) {
//         resolve("sioltjkd")
//     }else{
//         rejects("kshkjfkjs")
//     }
// });
// myPromise.then()

firstRequest()
  .then(function(response) {
    return secondRequest(response);
}).then(function(nextResponse) {  
    return thirdRequest(nextResponse);
}).then(function(finalResponse) {  
    console.log('Final response: ' + finalResponse);
}).catch(failureCallback);
