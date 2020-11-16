async function f() {
    return Promise.resolve(1);
  }
  
  f().then(console.log); 


  async function sum(){
      a=23+45
      console.log(a)
  }
  sum()