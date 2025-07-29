const str = "Playwright";
//2.1
for (let item of str) {
    console.log(item);
}

//2.2
let arrStr = str.split("");
let arrReverse = arrStr.reverse()
console.log(`Mảng đảo chiều: ${arrReverse}`);

//2.3
const arr = [1, 2, 3, 4, 3, 55, 23];
let firstPosition = arr.findIndex(item => item === 3);
console.log(`Ví trị của số 3 đầu tiên: ${firstPosition}`);
let count = 0;
let secondPosition = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
        count++;
        if (count === 2) {
            secondPosition = i;
            break;
        }
    }
}
console.log(`Vị trí của số 3 thứ 2: ${secondPosition}`);

//2.4
const dupArr = [1, 2, 3, 1, 2, 4, 5];
const newArr = dupArr.filter((item) => {
    return dupArr.indexOf(item) === dupArr.lastIndexOf(item)
});
console.log(`Câc số chỉ xuất hiện 1 lần: ${newArr}`);
