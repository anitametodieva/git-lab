function alphabeticallyNamesSort(arr){
   console.log(arr
    .sort((a, b) => a.localeCompare(b))
    .map((name, index) => `${index + 1}.${name}`)
    .join('\n')
);
}

alphabeticallyNamesSort(["John", "Bob", "Christina", "Ema"])
