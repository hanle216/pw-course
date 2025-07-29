//1. Viết hàm multiply
function multiply(a, b) {
    return console.log(`${a} * ${b} = ${a * b}`);
}
multiply(4, 6);
multiply(8, 7);

//2. Viết hà findMin
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    console.log(`Gía trị nhỏ nhất: ${min}`);
}
findMin(28, 27, 30);

//3. Viết hàm getTopStudents
const students = [
    { name: "An", score: 8.5 },
    { name: "Bình", score: 7.0 },
    { name: "Chí", score: 9.2 },
    { name: "Nhân", score: 6.8 },
    { name: "Hân", score: 8.0 },
    { name: "Trâm", score: 7.5 },
    { name: "Minh", score: 9.0 },
    { name: "Nam", score: 5.5 },
    { name: "Trình", score: 6.2 },
    { name: "Liên", score: 8.8 }
];
const threshold = 9.0;
// function getTopStudents() {
//     let newStudents = students.filter((item) => item.score >= threshold).map((item) => item.name)
//     return newStudents;
// }
// console.log(getTopStudents());

function getTopStudents() {
    let newStudents = []
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            newStudents.push(students[i].name)
        }
    }
    return newStudents;
}
console.log(getTopStudents());

//4. Viết hàm calculateInterest
function calculateInterest(principal, rate, years) {
   const total = principal + principal * rate * years / 100
    return total;
}
console.log(`Tổng số tiền: ${calculateInterest(50000000, 7, 3).toLocaleString()} VND`);
