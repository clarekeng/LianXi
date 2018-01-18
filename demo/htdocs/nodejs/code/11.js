
"use strict"; //严格模式
const args = process.argv.slice(2);

let parameter1 = args[0];
let operator = args[1];
let parameter2 = args[2];
if (args.length != 3) {
    throw new Error('没有参数')
}
const calc = require('./module/module1.js');
let result;
switch (operator) {
    case '+':
    result = calc.add(parameter1,parameter2);
    break;
     case '-':
    result = calc.subtract(parameter1,parameter2);
    break;
     case '*':
    result = calc.mutiply(parameter1,parameter2);
    break;
     case '/':
    result = calc.divide(parameter1,parameter2);
    break;
    default:
    throw new Error('不被支持的操作符' + operator)
       
}
console.log(result);