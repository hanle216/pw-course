const fullName = "Nguyễn Văn A";
const date = "2024-05-19";
const email = "example@gmail.com";

//1
const newFullName = fullName.substring(0, 6);
console.log(newFullName);

//2
const year = date.substring(0, 4);
console.log(year);

//3
const index = email.indexOf("@");
const domain = email.substring(index + 1);
console.log(domain);