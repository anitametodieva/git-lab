function replaceRepeatingShars(string){
    let char = string.split('');
    let filtered = char.filter((ch, i) => ch !== string[i - 1]);
    let result = filtered.join('');
    console.log(result);
}

replaceRepeatingShars('aaaaabbbbbcdddeeeedssaa')