//Question 2
let str1 = 'I love my India';
let words = str.split(' ');
let reversedWords = words.reverse();
let reversedStr = reversedWords.join(' ');
console.log(reversedStr); 
// Output: 'India my love I'

//Question 3
let string = 'INDIA';
let characters = string.split('');
characters.splice(3, 0, 'O', 'N', 'E', 'S');
let newString = characters.join('');
console.log(newString); 
// Output: 'INDONESIA'

//Question 4
let str2 = "Hi, Iam Laxmisneha Chilukuri";
str = str.toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
let vowelCount = 0;
let consonantCount = 0;
for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (/[a-z]/.test(char)) {
        if (vowels.includes(char)) {
            vowelCount++;
        } 
        else {
            consonantCount++;
        }
    }
}

console.log("Number of vowels:", vowelCount);
console.log("Number of consonants:", consonantCount);
//Output :
// Number of vowels: 11
// Number of consonants: 13