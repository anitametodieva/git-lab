function passwordGenerator(arr){
    let [str1, str2, replacementStr] = arr;
    let concatStr = str1 + str2;

    let vowels = ['a', 'e', 'o', 'i', 'u'];

    let replacementIdx = 0;

    for(let char of concatStr){
        if(vowels.includes(char)){
            concatStr = concatStr.replace(char, replacementStr[replacementIdx].toUpperCase());
            replacementIdx++;

            if(replacementIdx === replacementStr.length){
                replacementIdx = 0;
            }
        }
    }

    let finalPassword = concatStr.split('').reverse().join('');
    console.log(`Your generated password is ${finalPassword}`);
    
}

passwordGenerator([

'ilovepizza',

'ihatevegetables',

'orange'

])