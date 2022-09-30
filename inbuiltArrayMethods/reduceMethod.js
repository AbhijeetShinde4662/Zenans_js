var arr=[10000,123,456,783,23,45]
function sum(total,number) 
{
    return total-number
}

console.log(arr.reduce(sum));
console.log(arr);

