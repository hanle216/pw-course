const numbers = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];

//1
numbers.push(4);
names.push("David");
console.log(numbers);
console.log(names);

//2
numbers.pop();
console.log(numbers);

//3
numbers.unshift(0);
names.unshift("David");
console.log(numbers);
console.log(names);

//4
numbers.shift();
console.log(numbers);
