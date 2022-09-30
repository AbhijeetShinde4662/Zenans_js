var arr=[10,20,"Abhi","Dhanu",1.23]
for (var index = 0; index < arr.length; index++)
 {
    if (index<2) 
    {
        console.log("Hi I am JavaScript");
        break;
    }
    
    console.log(index+"   "+arr[index]);
}