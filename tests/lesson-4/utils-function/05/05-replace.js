const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";

//1
const newPhone = phoneNumber.split(" ").join(".");
console.log(newPhone);

//2
const newReport = report.replace("lỗi", "bug");
console.log(newReport);

//3
const newNumStr = numbersStr.split(",").join(".")
console.log(newNumStr);