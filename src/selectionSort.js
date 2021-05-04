export default function selectionSort(array)
{
    const animations=[];
    for(let i=0;i<array.length-1;i++)
    {   let minIndex=i;
        for(let j=i+1;j<array.length;j++)
        {
         if(array[j]<array[minIndex])
         {
          minIndex=j;
          
         }
        
        }
        //push for highlighting the two elements
        animations.push([i,minIndex]);
        animations.push([i,minIndex]);
        const temp=array[minIndex];
        array[minIndex]=array[i];
        array[i]=temp;
        
    }
    return animations;
}
function swap(a,b)
{
    const temp=a;
    a=b;
    b=a;
}