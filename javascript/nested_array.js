// Setup
var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  var secondTree = myPlants[1].list[1];
  var i=0
  while(i < myPlants.length){
    let j=0
    while(j < myPlants[i]["list"].length){
      console.log(myPlants[i]["list"][j])
      j++

    }
    i++
  }
