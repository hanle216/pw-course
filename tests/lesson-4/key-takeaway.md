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
