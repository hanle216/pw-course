# Vòng lặp forEach

- Dùng để lặp các phần tử trong mảng, khi ko cần lấy thứ tự các cúac phần tử trong mảng
- Trong callback function, nễu chỉ có 1 dòng duy nhất, có thể bỏ cặp ngoặc nhọn

```js
let numberArr = [1, 2, 3, -300, 4];
numberArr.forEach((num) => {
  console.log(num);
});
```

# Vòng lặp for in

- Dùng khi muốn lặp các thuộc tính của object
- Có thể kết hợp với cú pháp truy xuất thuộc tính của object để lấy ra giá trị tương ứng
- Thứ tụe lấy ra thuộc tính phụ thuộc vào loại trình duyệt bạn đang chạy. Vì vậy, chỉ ênn dùng for...in trong trường hợp không quan tâm thứ tự chạy

```js
for (const property in student) {
  console.log(`Property: ${property}, value: ${student[property]}`);
}
```

# Vòng lặp for of
- Lặp qua các giá trị của mảng, dùng khi bạn ko cần quan tâm đến chỉ số từng phần tử
- Lặp qua chuỗi: Chuỗi cũng đợc coi là 1 dãy các kí tự. Vì vậy, bạn có thể sử dụng for of để lặp qua từng ký tự trong chuỗi
```js
const str = "Hello";
console.log(str);
//output:
//H
//e
//l
//l
//o 
```
# Utils function
## some()
- Kiểm tra xem có ít nhất 1 phần tử thoả mãn điều kiện
- Trả về true/false
```js
let numbers = [1,2,3,4,5];
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);
```
## every()
- Kiểm tra xem tất cả phần tử thoả mãn điều kiện không
- Trả về true/false

## reduce()
- Áp dụng 1 hàm lên từng phần tử (từ trái sang phải) để trả về 1 giá trị duy nhất
```js
let numbers = [1,2,3,4,5];
let sum = numbers.reduce((total, num)=> total + num, 0);
console.log(sum); //output: sum = 10
//total: biến nhận giá trị duy nhất
//num: phần tử của mảng
//0: giá trị khởi tạo cho biến total
```