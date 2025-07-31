# Lamda function (Arrow function)

- Cách viết ngắn gọn hơn
- Sử dụng dấu => thay vì từ khoá function

```js
(parameters) => {
  //Code here
};
```

# Anonymous functions

- Hàm không có tên
- Thường được sử dụng 1 lần hoặc làm đối số truyền vào các hàm khác

```js
function (parameters) {
    //Code here
}
```

# DOM (Document Object Model)

## Node

- Một element:

```html
<option>United States</option>
```

- Thẻ mở, thẻ đóng:

```html
<option value="usa">United States</option>
```

- Thẻ tự đóng:

```html
<img src="image.jpg" alt="Image description" />
<br />
<hr />
```

- Cấu trúc của 1 element: <br>
  Thẻ mở <br>
  Thẻ đóng <br>
  Thuộc tính <br>
  Giá trị của thuộc tính <br>
  Text <br>

```html
<option value="usa">United States</option>
```

# Thẻ HTML thường gặp

- Thẻ `<div>` (viết tắt của divide): dùng để chia các khối trong trang web
- Thẻ `<h1></h1>` đến `<h6></h6>`(viết tắt của heading): dùng để tạo ra các header phân cấp
  theo thứ tự từ lớn đến bé.
- Thẻ `<form></form>`: dùng để chứa một form thông tin.
- Thẻ input: text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: hiển thị ô input, dạng to.
- Thẻ radio button: tạo nút chọn một (radio).
- Thẻ checkbox: tạo nút chọn nhiều lựa chọn (checkbox).
- Thẻ list và dropdown: hiển thị danh sách hoặc menu thả xuống.
- Thẻ button: tạo nút bấm.
- Thẻ table: hiển thị bảng dữ liệu.
- thead = table heading
- tr = table row = 1 dòng
- th: table heading: text in đậm
- tbody
- tr -> td = table data
- Thẻ date picker: tạo bộ chọn ngày.
- Thẻ slider: tạo thanh trượt.
- Thẻ iframe: hiển thị nội dung từ một trang web khác bên trong trang hiện tại.

# Selector

- Là cách chọn phần tử trên trang
- Có nhiều kiểu: <br>
  XPATH selector <br>
  CSS selector <br>
  Playwright selector <br>

## XPATH (XML Path) selector

Có 2 loại:

- Tuyệt đối: đi dọc theo cây DOM - bắt đầu bởi 1 /
- Tương đối: tìm dựa vào đặc tính - bắt đầu bởi 2 //

```
//tenthe[@thuoctinh = "giatri"]
```

- Nên dùng XPATH tương đối

# Playwright basic syntax

- test: đơn vị cơ bản để khai báo 1 test

```js
import { test } from "@playwright/test";

test("<tên test>", async ({ page }) => {
  // Code của test
});
```

- step: đơn vị nhỏ hơn test, để khai báo từng step của test case

```js
await test.step("Tên step", async () => {
  // Code here
});
```

- Lưu ý: step nên đuọc map 1-1 với test case để dễ dàng maintain

## Basic action

- Navigate:

```js
await page.goto("https://pw-practice.playwrightvn.com/");
```

- Click: <br>
  Single click

```js
await page.locator("//button").click();
```

Double click

```js
await page.locator("//button").dblclick();
```

Click chuột phải

```js
page.locator("//button").click({ button: "right" });
```

Click chuột kèm bấm phím khác

```js
page.locator("").click({ modifiers: ["Shift"] });
```

- Input: <br>
  Fill

```js
page.locator("//input").fill("Playwright Viet Nam");
```

pressSequentially

```js
page.locator("//input").pressSequentially("PlaywrightVietNam", { delay: 100 });
```

- Radio/checkbox: <br>

```js
const isChecked = page.locator("//input").isChecked();
```

Check/uncheck

```js
page.locator("//input").check();
page.locator("//input").setChecked(false);
```
