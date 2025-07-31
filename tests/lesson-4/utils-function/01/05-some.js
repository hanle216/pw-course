const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//5.1
const checkScores = scores.some((score) => score > 80);
console.log(checkScores);

//5.2
const checkAges = scores.some((age) => age > 18);
console.log(checkAges);

//5.3
const checkWords = words.some((word) => word.length > 5);
console.log(checkWords);