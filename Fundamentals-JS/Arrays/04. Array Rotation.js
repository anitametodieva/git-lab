function arrayRotation(arr, rotationNum){
    for(let currentRotation = 1; currentRotation <= rotationNum; currentRotation++){
        let takenOutEl = arr.shift();
        arr.push(takenOutEl);
    }

    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2)