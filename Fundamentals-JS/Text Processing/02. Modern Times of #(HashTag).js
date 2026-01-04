function findWordsWithHashTag(string){
    let words = string.split(' ').filter(w => w.startsWith('#') && w.length > 1);

    for(let word of words){
        word = word.substring(1);

        let pattern = /^[A-Za-z]+$/;

        if(pattern.test(word)){
            console.log(word);
        }
    }
}

findWordsWithHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')