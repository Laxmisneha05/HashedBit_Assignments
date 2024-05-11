//Question 8
function repeatedSumOfDigits(number) {
    let numString = number.toString();
    while (numString.length > 1) {
        let sum = 0;
        for (let i = 0; i < numString.length; i++) {
            sum += parseInt(numString[i]);
        }
        numString = sum.toString();
    }
    return parseInt(numString);
}

console.log(repeatedSumOfDigits(456)); 
// Output: 6


//Question 9 
function countWords(paragraph) {
    paragraph = paragraph.trim();
    const wordsArray = paragraph.split(/\s+/);
    return wordsArray.length;
}

const paragraph = "Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.";
console.log(countWords(paragraph)); 
// Output: 17


//Question 10
function reverseString(str) {
    return str.split('').reverse().join('');
}

const input = "Hello";
const output = reverseString(input);
console.log(output); 
// Output: "olleH"


//Question 11
const students = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

const averages = students.map(student => {
    const studentName = Object.keys(student)[0];
    const scores = Object.values(student)[0];
    const scoreValues = Object.values(scores); 
    const sum = scoreValues.reduce((acc, score) => acc + score, 0);
    const average = sum / scoreValues.length; 
    return { [studentName]: { average: average } }; 
});

console.log(averages);
//Output:
// [
//     { student1: { average: 64.2 } },
//     { student2: { average: 64.2 } },
//     { student3: { average: 64.2 } }
//   ]