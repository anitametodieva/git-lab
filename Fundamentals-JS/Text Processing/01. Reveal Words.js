function revealWords(wordsToPlace, text){
    let wordsArray = wordsToPlace.split(', ');

    for(let word of wordsArray){
        let starTemplate = '*'.repeat(word.length);
        text = text.replace(starTemplate, word);
    }

    console.log(text);
    
}

revealWords('great',

'softuni is ***** place for learning new programming languages')