//1
const departurePlanet = "Trái Đất";
const mission = "Khám phá Vũ trụ K16";
let crew = ["Hân", "Anh", "Ngân", "Nga", "Tú"];
const launchShip = () => {
    let crewList = "";
    for (let i = 0; i < crew.length; i++) {
        crewList += crew[i];
        crewList += ", "
    }
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewList}sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`
};
console.log(launchShip());

//2
const calculateDistance = (speed, time) => {
    return speed * time;
};
console.log(calculateDistance(1000, 24).toLocaleString() + " km");

//3
const convertTimeToHex = (time) => {
    return time.toString(16);
}
console.log(convertTimeToHex(120));

//4
const decryptCode = (code) => {
    let codeStr = "";
    for (let i = 0; i < code.length; i++) {
        let result = code[i];
        if (result === result.toLowerCase() && result !== result.toUpperCase()) {
            codeStr += result.toUpperCase();
        } else if (result === result.toUpperCase() && result !== result.toLowerCase()) {
            codeStr += result.toLowerCase();
        } else {
            codeStr += result;
        }
    }
    return codeStr;
}
console.log(decryptCode("K16 Challenge"));

//5
returnToEarth = () => {
    let letter = "Chuẩn bị trở về Trái Đất!";
    console.log(letter);
}
returnToEarth();

