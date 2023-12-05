  function isPalindrome(word) {
    const original = word.toLowerCase().replace(/[\W_]/g, '');
    const length = original.length;
  
    for (let i = 0; i < Math.floor(length / 2); i++) {
      if (original[i] !== original[length - 1 - i]) {
        return false;
      }
    }
  
    return true; 
  }
  
  // Usage:
  console.log(isPalindrome("aba")); 
  console.log(isPalindrome("abc")); 

  