function equalSums(arr){
    for(let i = 0; i < arr.length; i++){
        let sumToLeft = 0;
        let sumToRight = 0;

        for(let j = 0; j < i; j++){
            sumToLeft += arr[j];
        }
        
        for(let j = i + 1; j < arr.length; j++){
            sumToRight += arr[j];
        }

        if(sumToLeft === sumToRight){
            console.log(i);
            return;
        }
    }
    console.log('no');
}

equalSums([1, 2, 3, 3])