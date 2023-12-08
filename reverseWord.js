const reverseWords = (str) => {
    const revWords = [];
    const words = str.split(" ");
    let len = words.length - 1;
    for (let i = len; i >= 0; i--) {
      revWords.push(words[i]);
    }
    const revString = revWords.join(" ");
    return revString;
  };
  
  const input = "Saya belajar Javascript";
  const reversed = reverseWords(input);
  console.log(`
  Sebelum reverse: ${input}
  Setelah reverse: ${reversed}
  `);