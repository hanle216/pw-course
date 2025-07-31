//1.1
const numbers = [1, 2, 3];
numbers.forEach(element => console.log(element));

const countSum = () => {
    let sum = 0;
    numbers.forEach(num => {
        sum += num;
    }
    )
    return sum;
}
console.log(`Tổng: ${countSum()}`);

//1.2. Tính tổng, tìm min, max
const findMinMax = () => {
    let total = 0
    let min = numbers[0];
    let max = numbers[0];
    numbers.forEach(num => {
        total += num;
        if (num < min) {
            min = num;
        } else if (num > max) {
            max = num;
        }
    })
    console.log(`Tổng: ${total}`);
    console.log(`Min: ${min}`);
    console.log(`Max: ${max}`);
}
findMinMax();


//1.3. Tạo mảng mới từ numbers, mỗi phần tử nhân đôi
// newArr = numbers.map(item => item * 2);
// console.log("New array:", newArr);

let doubled = [];
numbers.forEach(item => {
    doubled.push(item * 2)
});
console.log(doubled);
