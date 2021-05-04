export default function bubbleSort(array)
{
    const animations=[];
    const auxiliary=array;
    for(let i=0;i<array.length-1;i++)
    {
        for(let j=0;j<array.length-i-1;j++)
        {
            const comparison=[j,j+1];
            if(array[j]>array[j+1])
            {   animations.push(comparison);
                animations.push(comparison);
                const temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;                
            }
            else{
                animations.push(comparison);
                animations.push([j,j]);
            }

        }
    }
    return animations;
}
function swap(a,b)
{
    const temp=a;
    a=b;
    b=temp;
}