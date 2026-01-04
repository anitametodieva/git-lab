function printCharactersInRange(char1, char2){
    let code1 = char1.charCodeAt();
    let code2 = char2.charCodeAt();

    let minCode = Math.min(code1, code2);
    let maxCode = Math.max(code1, code2);

    let result = [];

    for(let currentCode = minCode + 1; currentCode < maxCode; currentCode++){
        let currentChar = String.fromCharCode(currentCode);
        result.push(currentChar);
    }

    console.log(result.join(' '));
}

printCharactersInRange('a', 'd')