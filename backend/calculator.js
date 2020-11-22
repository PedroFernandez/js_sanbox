'use strict'

const params = process.argv.slice(2);

const number1 = parseFloat(params[0]);
const number2 = parseFloat(params[1]);

// for (let i = 0; i < params.length; i++) {
//     console.log(params[i]);
// }

// for (const param of params) {
//     console.log(param);
// }

const result = `
The result of the sum is: ${number1 + number2}
The result of the subtraction is: ${number1 - number2}
The result of the multiplication is: ${number1 * number2}
The result of the division is: ${number1 / number2}
`;

console.log(result);