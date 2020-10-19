const myArithmetic = require('./arithmetic');
const myFs = require('fs');

var num1 = 51, num2 = 2;
var sum, difference, product, quotient;

sum = myArithmetic.add(num1, num2);
difference = myArithmetic.subtract(num1, num2);
product = myArithmetic.multiply(num1, num2);
quotient = myArithmetic.divide(num1, num2);

var msg = num1 + ' + ' + num2 + ' = ' + sum + '\n'+
num1 + ' - ' + num2 + ' = ' + difference + '\n'+
num1 + ' * ' + num2 + ' = ' + product + '\n'+
num1 + ' / ' + num2 + ' = ' + quotient + '\n'+
'--------------------------\n'

myFs.appendFile('Arithmetic.txt', msg,(e)=>{
    if(e) throw e;
})
console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);