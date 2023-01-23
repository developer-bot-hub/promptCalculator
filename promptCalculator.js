const add = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const subtract = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const divide = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiply = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}
alert("What operation do you want to perform?");
let operation = prompt("1: addition, 2: subtraction, 3: division, 4: multiplication");
if (operation == 1) {
    let num1 = prompt("first number to add");
    let num2 = prompt("second number to add");
    result = add(num1,num2);
    alert(`your result is ${result}`);
}
else if (operation == 2) {
    let num1 = prompt("first number to subtract");
    let num2 = prompt("second number to subtract");
    result = subtract(num1,num2);
    alert(`your result is ${result}`);
}
else if (operation == 3) {
    let num1 = prompt("first number to divide");
    let num2 = prompt("second number to divide");
    result = divide(num1,num2);
    alert(`your result is ${result}`);
}
else if (operation == 4) {
    let num1 = prompt("first number to multiply");
    let num2 = prompt("second number to multiply");
    result = multiply(num1,num2);
    alert(`your result is ${result}`);
}
else {
    alert("operation not found")
}