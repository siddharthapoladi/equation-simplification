const fs = require('fs');
const obj = JSON.parse(fs.readFileSync('file3.JSON', 'utf8'));

const { eachElement } = require("./helpers/eachElement");
const { preToInfix } = require("./helpers/preToInfix");
const { simplify } = require("./helpers/simplifyExp");


let arr = eachElement(obj);
let expression = preToInfix(arr);
console.log(expression)
let lhs = expression.split('=')[0];
let rhs = expression.split('=')[1].trim();
let value = simplify(rhs, lhs);
console.log("x = " + value);
console.log("x = ", eval(value));

