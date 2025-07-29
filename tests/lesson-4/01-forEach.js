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

//1.2
const findMinMax = () => {
    let min = numbers[0];
    let max = numbers[0];
    numbers.forEach(num => {
        if (num < min) {
            min = num;
        } else if (num > max) {
            max = num;
        }
    })
    return { min, max }
}
console.log(findMinMax());

//1.3
newArr = numbers.map(item => item * 2);
console.log("New array:", newArr);
