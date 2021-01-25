const letterValue = {
  'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51', 'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42', 'k': '52',
  'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54',
  'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55'
};
function polybius(input, encode = true) {
 
    
 
  if (!input) {
    return false;
  }

  // Capital letters can be ignored
  const noCaps = input.toLowerCase();
  let res = '';   
    
  // Create methods for encoding
  if (encode) {
    for (let i = 0; i < noCaps.length; i++) {

      // Spaces should be maintained throughout
      let theLetter = noCaps[i];
      if (theLetter === 'i' || theLetter === 'j') {
        res = res + letterValue['i'];
      } 
      else if (theLetter === ' ') {
        res += ' ';
      } 
      else {
        let matches = Object.entries(letterValue).find((letter) => theLetter === letter[0]);
        res = res + matches[1];
      }
    }
  } 
  else {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== ' ') count++;
    }
    if (count % 2 !== 0) {
      return false;
    }

    for (let i = 0; i < input.length; i = i + 2) {
      let decoded = `${input[i]}${input[i+1]}`;
      if (decoded.includes(' ')) {
        res = res + ' ';
        i = i-1;
      } 
      else if (decoded === '42') { //42 = i & j
        res = res + '(i/j)';
      } 
      else {
        let charIsEql = Object.entries(letterValue).find((letter) => decoded === letter[1]);
        if (charIsEql) res = res + charIsEql[0];
      }
    }
  }
    
  return res;
}

module.exports = polybius;