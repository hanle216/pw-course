const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//6.1
const sumScores = scores.reduce((acc, curr) => acc + curr);
console.log(`Tổng scores: ${sumScores}`);

//6.2
const multiNumbers = numbers.reduce((acc, curr) => acc * curr);
console.log(`Tích: ${multiNumbers}`);

//6.3
const sumExpenses = expenses.reduce((acc, curr) => acc + curr);
console.log(`Tổng expenses: ${sumExpenses}`);