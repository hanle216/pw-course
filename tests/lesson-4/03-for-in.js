const student = { "name": "Alex", "age": 10, "salary": 20 };
//3.1
for (let key in student) {
    console.log(key);
    console.log(student[key]);
}

//3.2
let sum = 0;
for (let prop in student) {
    if (!isNaN(Number(student[prop]))) {
        sum += Number(student[prop])
    }
}
console.log(`Tổng: ${sum}`);

//3.3
const propertyNames = Object.keys(student)
console.log("Mảng chứa tên các thuộc tính:", propertyNames);