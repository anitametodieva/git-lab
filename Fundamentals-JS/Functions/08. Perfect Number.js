function checkPerfectNumber(num){
    let divisorsSum = sumOfDivisors();

    if(divisorsSum === num){
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }

    function sumOfDivisors(){
        let sum = 0;

        for(let i = 1; i < num; i++){
            if(num % i === 0){
                sum += i;
            }
        }
        return sum;
    }
}

checkPerfectNumber(6)