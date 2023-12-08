const divideAndSort = (num) => {
    const arrOfDigits = Array.from(String(num), Number);
    const numArray = [];
    let subArray = [];
    for (const digit of arrOfDigits) {
      if (digit !== 0) {
        subArray.push(digit);
      } else {
        numArray.push(subArray.sort((a, b) => a - b));
        subArray = [];
      }
    }
  
    const combinedNum = +numArray.flat().join("");
    return combinedNum;
  };
  
  const input = 5956560159466056;
  console.log(divideAndSort(input));