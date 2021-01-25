const alphabetIndex = 'abcdefghijklmnopqrstuvwxyz';
function substitution(input, aToZ, encode = true) {
 
    
    
  if (!input || !aToZ) return false;
   
  const stringInput = input.toLowerCase();
  let res = '';
    
  if (aToZ.length !== 26) return false;
    
  const arrOfLetters = [];
  for (let letters in aToZ) {
    if (arrOfLetters .indexOf(aToZ[letters]) < 0) {
      arrOfLetters.push(aToZ[letters]);
    } 
    else {
      return false;
    }
  }

  for (let i = 0; i < stringInput.length; i++) {

    if (stringInput[i] === ' ') {
      res = res + ' ';
    } 
    else { 
      let index = alphabetIndex;
      let abc = aToZ;

      if (!encode) {
        index = aToZ;
        abc = alphabetIndex;
      }

            
      for (let j = 0; j < index.length; j++) {
        if (stringInput[i] === index[j]) { 
          res = res + abc[j];
        }
      }
    }    
  }
    
  return res;
}

module.exports = substitution;