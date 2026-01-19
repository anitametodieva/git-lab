function sortingNumbers(arr){
    let result = [];
    arr.sort((a, b) => a - b);

   for(let i = 0; i < arr.length / 2; i++){
    let lastIndex = arr.length -1 - i;

    result.push(arr[i]);

    if(i === lastIndex){
        break;
    }
    result.push(arr[lastIndex]);
   }
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
