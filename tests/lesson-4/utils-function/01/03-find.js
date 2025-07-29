const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//3.1
const checkScores = scores.find((score) => score > 80)
console.log(checkScores);

//3.2
const checkAges = ages.find((age) => age > 20)
console.log(checkAges);

//3.3
const checkWords = words.find((word) => word.length > 5);
console.log(checkWords);