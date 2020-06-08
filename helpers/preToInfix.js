const { isOperator } = require("./isOperator.js")

// Convert prefix to Infix expression
const preToInfix = (pre_exp) => {
    let s = [];
    let length = pre_exp.length;

    for (let i = length - 1; i >= 0; i--) {

        // check if symbol is operator
        if (isOperator(pre_exp[i])) {

            // pop two operands from stack
            let op1 = s[s.length - 1]; s.pop();
            let op2 = s[s.length - 1]; s.pop();

            let temp = ''
            // concat the operands and operator
            if (i <= 1) {
                temp = op1 + " " + pre_exp[i] + " " + op2;
            }
            else {
                temp = "(" + op1 + " " + pre_exp[i] + " " + op2 + ")";
            }

            // Push string temp back to stack
            s.push(temp);
        }

        // if symbol is an operand
        else {
            s.push(pre_exp[i]);
        }
    }
    return s[s.length - 1]
}

module.exports = { preToInfix }