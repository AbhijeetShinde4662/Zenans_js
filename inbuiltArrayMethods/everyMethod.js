var arr=[1,123,456,147,154.]
var abb=['A','B','C','Z','X','Y']

console.log(arr);
console.log(abb);
console.log(arr.every((element)=>{return element<50}));
console.log(abb.some((element)=>{return element=='B'}));
console.log(abb);
console.log(arr);