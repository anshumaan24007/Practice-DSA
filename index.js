function indexOfLargestNumber(arr){
    let max=0;
    let secondmax=-1;
    arr.forEach(element => {
        if(element>max&&max>secondmax)
        {
            secondmax=max;
            max=element;
            
        }


    });
    console.log("Second-Max ",secondmax);
}

function removeDuplicates(arr){
    let res=1;
    for (let index = 1; index < arr.length; index++) {
        if(arr[index]!=arr[res-1])
       {
           arr[res]=arr[index];
           res++;
           
       }
        
    }
       
    console.log("Remove Duplicates ",arr.splice(0,res));
}

let arr=[10,20,20,30,30,40,50,50,50];
indexOfLargestNumber(arr);
removeDuplicates(arr);

