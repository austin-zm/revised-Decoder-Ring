let allLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function caesar(input, shift, encode = true) {
    
    
  if (!input || !shift ||shift < -25 || shift > 25 || shift === 0) {
    return false; }

   
  let str = input.toLowerCase();
  let res = '';

    
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < allLetters.length; j++) {

      if (!allLetters.includes(str[i])) {
        res = res + str[i];
        break;
      }

            
      if (allLetters[j] === str[i]) {

        let letterMoved = j + shift;
        if (!encode) letterMoved = j - shift;

                
        if (letterMoved < 0) { //if the letter is shifted/moved after the last letter in allLetters then keep going from the start of allLetters
          letterMoved += 26;
          res =res + allLetters[letterMoved];
        } 
        else if (letterMoved > 25) {
          letterMoved -= 26;
          res = res + allLetters[letterMoved];
        }
        else res = res + allLetters[letterMoved];
      }
    }
  }
    
  return res;
}

module.exports = caesar; 