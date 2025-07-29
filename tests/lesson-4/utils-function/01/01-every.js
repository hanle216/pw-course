const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//1.1
const checkScores = scores.every((score) => score > 70);
console.log(checkScores);

//1.2
const checkAges = scores.every((age) => age > 70);
console.log(checkAges);

//1.3
const checkWords = words.every((word) => word.length > 3);
console.log(checkWords);