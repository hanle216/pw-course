//1. Tính tổng từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`Tổng từ 1 đến 100: ${sum}`);

//2. In ra bảng cửu chương từ 2 đén 9
function bangCuuChuong() {
    let chuoiCuuChuong = ""
    for (let soCuuChuong = 2; soCuuChuong <= 9; soCuuChuong++) {
        for (let i = 1; i <= 10; i++) {
            chuoiCuuChuong += (`${soCuuChuong} * ${i} = ${soCuuChuong * i}\n`);
        }
    }
    return chuoiCuuChuong;
}
console.log(bangCuuChuong());

//3. Tạo ra 1 mảng chứa các số lẻ từ 1 đến 99
function soLe() {
    let soLeArr = [];
    for (let i = 1; i <= 99; i++) {
        if (i % 2 !== 0) {
            soLeArr.push(i)
        }
    }
    return soLeArr;
}
console.log(soLe());

//4. In ra 10 email dựa trên tên người dùng và số thứ tự
function countNumber() {
    let number = ""
    for (let i = 1; i <= 10; i++) {
        number += `user${i}@example.com\n`
    }
    return number;
}
console.log(countNumber());

//5.Tính tổng doanh thu
let doanhThu = [
    { month: 1, total: 200 },
    { month: 2, total: 100 },
    { month: 3, total: 150 },
    { month: 4, total: 65 },
    { month: 5, total: 78 },
    { month: 6, total: 120 },
    { month: 7, total: 92 },
    { month: 8, total: 200 },
    { month: 9, total: 160 },
    { month: 10, total: 110 },
    { month: 11, total: 240 },
    { month: 12, total: 130 },
]
let tongDoanhThu = 0;
for (let i = 0; i < doanhThu.length; i++) {
    tongDoanhThu += doanhThu[i].total
}
console.log(`Tổng doanh thu của 12 tháng: ${tongDoanhThu.toLocaleString()}`);




