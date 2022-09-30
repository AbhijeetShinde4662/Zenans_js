var arr=[1,123,456,147,154.]
var abb=['A','B','C','Z','X','Y']

console.log(arr);
console.log(abb);
console.log(arr.some((element)=>{return element<0}));
console.log(abb.some((element)=>{return element='P'}));
console.log(abb);
console.log(arr);