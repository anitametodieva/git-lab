function printPalindromeStatuses(arr){
    for(let num of arr){
        console.log(checkIsPalindrome(num));
    }

    function checkIsPalindrome(num){
        let numAsString = String(num);
        let reversedNumAsString = numAsString.split('').reverse().join('');

        return numAsString === reversedNumAsString;
    }
}

printPalindromeStatuses([123,323,421,121])