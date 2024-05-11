//Question 5
function correctWord(sentence, wrong, correct) {
    const regex = new RegExp(wrong, 'gi');
    const correctedSentence = sentence.replace(regex, correct);
    return correctedSentence;
}

let sentence = "I lovee to eat appples";
let wrong = "lovee";
let correct = "love";
let correctedSentence = correctWord(sentence, wrong, correct);
console.log(correctedSentence); 
// Output: "I love to eat appples"


//Question 6
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let answer = inputArr.filter(number => number > 5);
console.log(answer); 
// Output: [9, 10, 7]


//Question7
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map(student => {
    const sum = student.scores.reduce((acc, score) => acc + score, 0);
    const average = sum / student.scores.length;
    return { name: student.name, average: average };
});

console.log(output);
//Output:
// [
//     { name: 'Ram', average: 70 },
//     { name: 'Mohan', average: 80 },
//     { name: 'Sai', average: 70 },
//     { name: 'Hemang', average: 85 }
//   ]
  