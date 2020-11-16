const someProcedure = async n =>
  {
    for (let i = 0; i < n; i++) {
      const t = Math.random() * 1000
      const x = await new Promise(r => setTimeout(r, t, i))
      console.log (i, x)
    }
    return 'done'
  }

someProcedure(10).then(x => console.log(x)) // => Promise