const isPalindrome = (str) => {
    let len = str.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (str[i] !== str[len - 1 - i]) {
        return "Bukan Palindrome";
      } else {
        return "Palindrome";
      }
    }
  };
  
  const input = "malam";
  const result = isPalindrome(input);
  console.log(`${input} adalah ${result}`);