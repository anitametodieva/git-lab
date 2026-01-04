function pascalCaseSplitter(string){
    let result = string.split(/(?=[A-Z])/);
    console.log(result.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')