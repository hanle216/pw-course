const scores = [85, 90, 78];
const words = ["apple", "banana", "cherry", "date"];

//4.1
const newScores = scores.map((score) => {
    if (score < 90) {
        return score + score * 0.1;
    } else {
        return score - score * 0.05;
    }
})
console.log(newScores);

//4.2
const numbers = [1, 2, 3]
const numbersString = numbers.map((num) => num.toString());
console.log("Chuyển thành mảng chuỗi:", numbersString);

//4.3
const dupNumbers = numbers.map((num) => num * 2);
console.log("Nhân đôi mỗi giá trị:", dupNumbers);

