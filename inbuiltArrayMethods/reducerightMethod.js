var arr=[10000,123,456,783,23,45000]
function sum(total,number) 
{
    return total-number
}

console.log(arr.reduceRight(sum));
console.log(arr);

