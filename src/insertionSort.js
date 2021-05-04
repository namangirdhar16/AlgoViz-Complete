export default function insertionSort(array)
{
    const animations=[];
    // for(let i=1;i<array.length;i++)
    // {   // for highlighting ith index
    //     animations.push(i);
    //     const j=i;
    //     while(array[j-1]>array[j] && j-1>=0)
    //     {
    //      animations.push(j,j-1);
    //      const temp=array[j-1];
    //      array[j-1]=array[j];
    //      array[j]=temp;
    //     }
        
    // }
    for(let i=1;i<array.length;i++)
    {
        let j=i;
        //animations.push([i]);
        const tempo=[];
       
        while(array[j-1]>array[j] && j-1>=0)
        {  tempo.push([j,j-1]);
         
           const temp=array[j-1];
           array[j-1]=array[j];
           array[j]=temp;
            j--;
        }
        
        if(tempo.length===0)
        tempo.push([i]);
        animations.push(tempo);
    }
    return animations;
}