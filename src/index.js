module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openBrackets = bracketsConfig.map(pair => pair[0]);
  const closeBrackets = bracketsConfig.map(pair => pair[1]);
  const bracketsMap = Object.fromEntries(bracketsConfig);

  for (const char of str) {
      if (openBrackets.includes(char)) {
         
          if (char === bracketsMap[char] && stack[stack.length - 1] === char) {
              stack.pop(); 
          } else {
              stack.push(char); 
          }
      } else if (closeBrackets.includes(char)) {
          const last = stack.pop();
          if (bracketsMap[last] !== char) return false; 
      }
  }

  return stack.length === 0; 
}
