const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//2.1
const checkScores = scores.filter((score) => score > 80);
console.log(checkScores);

//2.2
const checkAges = ages.filter((age) => age >= 18);
console.log(checkAges);

//2.3
const checkWords = words.filter((word) => word.length > 5);
console.log(checkWords);
