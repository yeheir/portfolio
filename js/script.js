let num1 = 256;
let num2 = 900;

function crossSum(num) {
    // let strNum = num.toString();
    let strNum = String(num);
    let leng = strNum.length;
    let sum = 0;
    for (let i = 0; i < leng; i++) {
        if (strNum[i] === "-") {
            continue;
        }
        sum += parseInt(strNum[i]);
    }
    return sum;
}

function isEven(num) {
    return num % 2 === 0;
}

function add(num1, num2) {
    return num1 + num2;
}

function check(num1, num2) {
    let init = add(num1, num2);
    console.log("add check: " + init);
    init = crossSum(init);
    console.log("crossSum check: " + init);
    return isEven(init);
}

console.log("isEven check: " + check(num1, num2));
console.log();

// Arrays ------------------------------------------

nums =  [];

let rand;
for (i = 0; i < 10; i++) {
    rand = Math.random() * 201 - 100;
    nums[i] = Math.floor(rand);
}

console.log("Zahlenarray: " + nums);

crossChecked = nums.map(crossSum);
console.log("Quersumme jeder Zahl: " + crossChecked);

numsFiltered = nums.filter((num) => num % 2 !== 0);
console.log("Nur ungerade: " + numsFiltered);

numsSum = nums.reduce(add, 0);
console.log("Summe: " + numsSum);

nums.forEach((num) => console.log(num));
console.log();

// Factorial -------------------------------------------

factorNum = 10;

function factorial(num, f) {
    if (f === undefined) {
        f = 1;
    }
    f = f * num;
    console.log(f);
    num = num - 1;
    if (num === 1) {
        return f;
    }
    factorial(num, f);
}

let factor = factorial(factorNum);
console.log("Fact of " + factorNum + ": " + factor); // undefined??