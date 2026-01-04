function ladybugs(arr){
    let size = Number(arr[0]);
    let field = Array(size).fill(0);
    let ladybugIndexes = arr[1].split(' ').map(Number);

    for(let index of ladybugIndexes){
        if(index >= 0 && index < size){
            field[index] = 1;
        }
    }

    for(let i = 2; i < arr.length; i++){
        let [start, direction, flyLength] = arr[i].split(' ');
        start = Number(start);
        flyLength = Number(flyLength);

        if(field[start] !== 1) continue;

        field[start] = 0;

        let position = start;

        while(true){
            if(direction === 'right'){
                position += flyLength;
            } else {
                position -= flyLength;
            }

            if(position < 0 || position >= size){
                break;
            }

            if(field[position] === 0){
                field[position] = 1;
                break;
            }
        }
    }

    console.log(field.join(' '));
}

ladybugs([ 3, '0 1','0 right 1','2 right 1' ])