module.exports = function check(str, bracketsConfig) {
  const stack = [];
  
  for (let symbol of str) {
    const openingBrace = bracketsConfig.find(pair => pair[0] === symbol);
    const closingBrace = bracketsConfig.find(pair => pair[1] === symbol);

    if ( openingBrace === undefined && closingBrace === undefined) {
      return false;; // Ignore characters that are not part of the brace pairs
    }

    if (openingBrace === closingBrace) {
      if (stack.length === 0 || stack[stack.length - 1] !== openingBrace[0]) {
        stack.push(openingBrace[0]);
      } else {
        stack.pop();
      }

  } else if (openingBrace) {
      
      stack.push(openingBrace[0]);
    } else if (closingBrace) {
      const shouldBeClosedWith = stack.pop();
      if (shouldBeClosedWith !== closingBrace[0]) {
        return false; 
      }
    }
  }

  return stack.length === 0; // Return true if stack is empty (all braces are correctly closed)
}

