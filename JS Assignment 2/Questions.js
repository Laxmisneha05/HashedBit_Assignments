//Question 1
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


//Question 2
function calculate(operation, num1, num2) {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Cannot divide by zero';
            }
            break;
        default:
            result = 'Invalid operation';
            break;
    }
    return result;
}

console.log(calculate('add', 10, 4));       // Output: 8
console.log(calculate('subtract', 10, 4)); // Output: 6
console.log(calculate('multiply', 6, 2));  // Output: 12
console.log(calculate('divide', 10, 2));   // Output: 5
console.log(calculate('divide', 5, 0));    // Output: Cannot divide by zero
console.log(calculate('power', 2, 3));     // Output: Invalid operation


//Question3
function findTax(salary) {
    let taxRate;
    let taxAmount;

    switch (true) {
        case salary > 1500000:
            taxRate = 0.3;
            break;
        case salary > 1000000:
            taxRate = 0.2;
            break;
        case salary > 500000:
            taxRate = 0.1;
            break;
        case salary > 0:
            taxRate = 0;
            break;
        default:
            return 'Invalid salary';
    }

    taxAmount = salary * taxRate;
    return taxAmount;
}

console.log(findTax(400000)); // Output: 0 
console.log(findTax(800000)); // Output: 80000 
console.log(findTax(1200000)); // Output: 240000 
console.log(findTax(1600000)); // Output: 480000 


//Question 4
function sumOfProducts(n1, n2) {
    const digits1 = Array.from(String(n1), Number);
    const digits2 = Array.from(String(n2), Number);

    let sum = 0;

    for (let i = 0; i < Math.max(digits1.length, digits2.length); i++) {
        const digit1 = digits1[digits1.length - i - 1] || 0; 
        const digit2 = digits2[digits2.length - i - 1] || 0; 
        sum += digit1 * digit2;
    }
    
    return sum;
}

console.log(sumOfProducts(6, 34)); // Output: 24