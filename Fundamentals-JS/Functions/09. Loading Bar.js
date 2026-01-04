function visualizesLoadingBar(number){
    let result = makeBar();

    if(number === 100){
        console.log(`100% Complete!`);
        console.log(`[${result}]`);
    } else {
        console.log(`${number}% [${result}]`);
        console.log(`Still loading...`);
    }

    function makeBar(){
       let percentCount = number / 10; 
       let bar = '%'.repeat(percentCount) + '.'.repeat(10 - percentCount);
       return bar;
    }
}

visualizesLoadingBar(100)