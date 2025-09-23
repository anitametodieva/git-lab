function asciiValues(char1, char2, char3) {
  console.log(`${char3}${char2}${char1}`);

  const ascii1 = char1.charCodeAt(0);
  const ascii2 = char2.charCodeAt(0);
  const ascii3 = char3.charCodeAt(0);

  console.log(`${ascii3} ${ascii2} ${ascii1}`);
}

asciiValues('a', 'b', 'c');