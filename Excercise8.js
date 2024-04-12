// Give Javascript code 

const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//Step 1

function encryptLetter(letter, shift) {
    const index = alphabet.indexOf(letter.toLowerCase())
    const newIndex = (index + shift) % alphabet.length;
    return alphabet[newIndex];
}

//Step 2

function encryptedMessage (word, shift) {
    let encryptedMessage ="";
    for (let i = 0; i < word.length; i++)
    {
        encryptedMessage+= encryptLetter(word[i],shift:)
    }
    return encryptedMessage;
}

//Step 3

function decryptLetter (letter, shift)
{
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index - shift + alphabet.length) % alphabet.length;
  return alphabet[newIndex];
}

//Step 4

function decryptMessage (word, shift)
{
  let decryptedMessage = "";
  for (let i = 0; i < word.length; i++)
  {
    decryptedMessage += decryptLetter(word[i], shift);
  }
  return decryptedMessage;
}