function addAndSubtract(num1, num2, num3){
    function sum(a, b){
        return a + b;
    }

    function subtract(a, b){
        return a - b;
    }

    let initialSum = sum(num1, num2);
    let result = subtract(initialSum, num3);
    console.log(result);
}

addAndSubtract(23, 6, 10)