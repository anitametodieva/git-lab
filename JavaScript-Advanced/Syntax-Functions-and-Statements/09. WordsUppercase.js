function wordsUppercase(text){
   let words = text.match(/\w+/g);
   let upperWords = words.map(word => word.toUpperCase());

   console.log(upperWords.join(', '));
}

wordsUppercase('Hi, how are you?')
