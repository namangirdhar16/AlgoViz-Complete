

// //  export default function mergeSort(array)
// //  {
// //  if(array.length===1)
// //  return array;
// //  const  midIndex= Math.floor(array.length/2);
// //  const firstHalf=mergeSort(array.slice(0,midIndex));
// //  const secondHalf=mergeSort(array.slice(midIndex));
// //  const sortedArray=[];
// //  let i=0,j=0;
// //  while(i<firstHalf.length && j<secondHalf.length)
// //  {
// //      if(firstHalf[i]<secondHalf[j])
// //      {
// //          sortedArray.push(firstHalf[i++]);
// //      }
// //      else
// //      {
// //          sortedArray.push(secondHalf[j++]);
// //      }

// //  }
// //  while(i<firstHalf.length)sortedArray.push(firstHalf[i++]);
// //  while(j<secondHalf.length)sortedArray.push(secondHalf[j++]);
// //  return sortedArray;
// // };

// export default function mergeSort(array) {
//    const animations=[];
//    if(array.length<=1)
//    return animations;
//    const auxilliaryArray=array.slice();
//    mergeSortHelper(array,0,array.length-1,auxilliaryArray,animations);
//    return animations;
    
// }
// function mergeSortHelper(array,start,end,auxilliaryArray,animations) {
//     if(start===end)return ;
//     const mid=Math.floor((start+end)/2);
//     mergeSortHelper(auxilliaryArray,start,mid,array,animations);
//     mergeSortHelper(auxilliaryArray,mid+1,end,array,animations);
//     merge(array,start,mid,end,auxilliaryArray,animations);
// }
// function merge(array,start,mid,end,auxilliaryArray,animations)
// {
//     let i=start;
//     let j=start;
//     let k=mid+1;
//     while(j<=mid && k<=end)
//     {
//         animations.push([i,j]);
//         animations.push([i,j]);

//         if(auxilliaryArray[j]<=auxilliaryArray[k])
//         {
//             animations.swap=[i,auxilliaryArray[j]];
//             array[i++]=auxilliaryArray[j++];
//         }
//         else
//         {
//             animations.swap=[i,auxilliaryArray[k]];
//             array[i++]=auxilliaryArray[k++];

//         }
         
//     }
//     while(j<=mid)
//     {
//         animations.push([j,j]);
//         animations.push([j,j]);
//         animations.push([i,auxilliaryArray[j]]);
//         array[i++]=auxilliaryArray[j++];
//     }
//     while(k<=end)
//     {
//         animations.push([k,k]);
//         animations.push([k,k]);
//         animations.push([i,auxilliaryArray[k]]);
//         array[i++]=auxilliaryArray[k++];
//     }
// }

export default function mergeSort(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    
    animations.push([i, j]);
    
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
     
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    
    animations.push([i, i]);
  
    
    animations.push([i, i]);
   
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    
    animations.push([j, j]);
    
    animations.push([j, j]);
    
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

