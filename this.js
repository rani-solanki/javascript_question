function surName(fName,lasName){
    this.fName=fName;
    this.lasName=lasName;
}
let per1 = new surName("Rani"," - solanki");
let per2 = new surName("software"," - engineering");

console.log(`${per1.fName}${per1.lasName}`);
console.log(`${per2.fName}${per2.lasName}`);