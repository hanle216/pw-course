let input = 158;

if (!isNaN(input) && input > 0) {
    let convertHeight = input / 100;
    let height = parseFloat(convertHeight);
    console.log("Height is:", height, "met");
    let heightResult = input - 100;
    const weight = heightResult * 9 / 10;
    const weightMax = heightResult;
    const weightMin = heightResult * 8 / 10;
    console.log("The weight is:", weight + " " + "The maximum weight is:", weightMax + " " + "The minimum weight is:", weightMin);
}


