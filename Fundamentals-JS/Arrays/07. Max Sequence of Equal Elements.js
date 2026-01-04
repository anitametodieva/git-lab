function maxSequenceOfEqualElements(arr){
    let maxLength = 1;
    let currentLength = 1;
    let bestElement = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i - 1]){
            currentLength++;
        } else {
            currentLength = 1;
        }
        
        if(currentLength > maxLength){
            maxLength = currentLength;
            bestElement = arr[i];
        }
    }

    console.log((bestElement + ' ').repeat(maxLength).trim());
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])