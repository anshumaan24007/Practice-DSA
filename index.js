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
       
    console.log("Remove Duplicates ",arr);
}

function moveZerotoEnd(arr){
    let res=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]!=0)
        {
            let temp=arr[res];
            arr[res]=arr[i];
            arr[i]=temp;
            res++;
        }
    }
    console.log("Moved 0 in array to last",arr);
}

function leftRotate(arr,d,n){
    console.log("left Rotate array ",arr);
    revereseArray(arr,0,d-1);
    revereseArray(arr,d,n-1);
    revereseArray(arr,0,n-1);
    
    console.log(" "+d+" times: ",arr);


    function revereseArray(arr,lo,hi)
    {
        while(lo<hi)
        {
            temp=arr[lo]
            arr[lo]=arr[hi];
            arr[hi]=temp;
            lo++;
            hi--;
        }
    }

}

let arr=[10,20,20,0,0,30,30,0,40,50,0,50,50];
indexOfLargestNumber(arr);
removeDuplicates(arr);
moveZerotoEnd(arr);
leftRotate(arr,d=3,arr.length);

