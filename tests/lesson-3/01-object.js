//1.
car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
}
console.log(`Năm sản xuất xe: ${car.year}`);

//2.
person = {
    name: "Han",
    address: {
        street: "Nguyen Van Cu st",
        city: "Ho Chi Minh",
        country: "Viet Nam"
    }
}
console.log(`Tên đường: ${person.address.street}`);

//3.
student = {
    name: "Han",
    grades: {
        math: 9,
        english: 10
    }
}
console.log(student.grades["math"]);

//4
setting = {
    volumn: 50,
    brightness: 70
}
setting.volumn = 100;
console.log("New setting:", setting);

//5
bike = {

}
bike.color = "green"
console.log(bike);

//6
employee = {
    name: "Han",
    age: 26
}
delete employee.age
console.log(employee);

//7
school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}