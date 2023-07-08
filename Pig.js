// - if a word begins with a vowel, the letter remains in place and 'way' is appended to the end of the word:
// apple --> appleway

// - if a word begins with one consonant, that letter is moved to the end and 'ay' is appended:
// pig latin --> igpay atinlay

// - if a word begins with two consonants, both letters are moved to the end and 'ay' is appended:
// grade --> adegray
var word = prompt("Enter text");


function vowels (){
if (word.slice(0, 1).match(/[aeiou]/i)) {
  var translatedWord = word + "way";
  console.log(translatedWord);
  document.write("Translated: " + translatedWord);
} 
else if (word.slice(0, 2).match(/[bcdfghjklmnpqrstvwxyz]{2}/i)) {
  var translatedWord = word.slice(2) + word.slice(0, 2) + "ay";
  console.log(translatedWord);
  document.write("Translated: " + translatedWord);
}
else if (word.slice(0, 1).match(/[bcdfghjklmnpqrstvwxyz]/i)) {
  var translatedWord = word.slice(1) + word.slice(0, 1) + "ay";
  console.log(translatedWord);
  document.write("Translated: " + translatedWord);
}}

 vowels();


