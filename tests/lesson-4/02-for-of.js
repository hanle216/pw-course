const str = "Playwright";
//2.1.In ra lần lượt từng kí tự của chuỗi
for (let item of str) {
    console.log(item);
}

//2.2.Tạo mảng đảo ngược từ str
// let arrStr = str.split("");
// let arrReverse = arrStr.reverse()
// console.log(`Mảng đảo chiều: ${arrReverse}`);

const reversed = [];
for (const char of str) {
    reversed.unshift(char);
};
console.log(`Mảng đảo chiều: ${reversed}`);

//2.3. Tìm và in ra vị trí đầu tiên và cuối cùng của 3 trong arr
const arr = [1, 2, 3, 4, 3, 55, 23];
let firstIndex = -1;
let lastIndex = -1;
let count = 0; //lưu các lần lặp
for (const num of arr) {
    if (num == 3) {
        if (firstIndex === -1) {
            firstIndex = count
        }
        lastIndex = count;
    }
    count++
}
console.log(`First index: ${firstIndex} - Last index: ${lastIndex}`);


// let firstPosition = arr.findIndex(item => item === 3);
// console.log(`Ví trị của số 3 đầu tiên: ${firstPosition}`);
// let count = 0;
// let secondPosition = -1;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//         count++;
//         if (count === 2) {
//             secondPosition = i;
//             break;
//         }
//     }
// }
// console.log(`Vị trí của số 3 thứ 2: ${secondPosition}`);

//2.4. Lọc các phần tử chỉ xuất hiện 1 lần trong dupArr
const dupArr = [1, 2, 3, 1, 2, 4, 5];
const countMap = {}; //tạo object mới để lưu các cặp key-value
for (const num of dupArr) {
    if (countMap[num] === undefined) {
        countMap[num] = 1; //countMap={1:1, 2:2, 3:1,...}
    } else {
        countMap[num] = countMap[num] + 1;
    }
}
console.log(countMap);
const uniqueElements = [];
for (const num of dupArr) {
    if (countMap[num] === 1) {
        uniqueElements.push(num)
    }
}
console.log("Các phần tử chỉ xuất hiện 1 lần:", uniqueElements);

// const newArr = dupArr.filter((item) => {
//     return dupArr.indexOf(item) === dupArr.lastIndexOf(item)
// });
// console.log(`Câc số chỉ xuất hiện 1 lần: ${newArr}`);
