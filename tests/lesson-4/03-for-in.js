const student = { "name": "Alex", "age": 10, "salary": 20 };
//3.1. In ra tên và giá trị mỗi thuộc tính của student
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

//3.2. 
let sum = 0;
for (let key in student) {
    if (typeof student[key] === "number") {
        sum += student[key];
    }
}
console.log(`Tổng: ${sum}`);

//3.3. Tạo mảng chứa tên các thuộc tính của student
let newArr = [];
for (const key in student) {
    newArr.push(key)
}
console.log("Mảng chứa tên các thuộc tính:", newArr);
// const propertyNames = Object.keys(student)
// console.log("Mảng chứa tên các thuộc tính:", propertyNames);