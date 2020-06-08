const { isOperator } = require("./isOperator");
const { OppOperator } = require("./oppOperator");
const { removeEmp } = require("./removeEmp");

//simplify the expression

const simplify = (rhs, exp) => {

    exp = removeEmp(exp.replace(/\(/g, '( ').replace(/\)/g, ' )').split(' '));

    while (exp.length > 1) {
        // Find index of the constant
        let bracketCount = 0;
        let constIndex = -1;
        for (let i = 0; i < exp.length; i++) {
            if (exp[i] === '(') {
                bracketCount++;
            } else if (exp[i] === ')') {
                bracketCount--;
            } else if (exp[i] === 'x' || isOperator(exp[i])) {

            } else if (bracketCount === 0) {
                constIndex = i;
                break;
            }
        }

        // Find operator for the constant. Append the opposite operator and constant to rhs.
        let op;
        let flag = false;
        if (constIndex === 0) {
            op = exp[constIndex + 1];
            if (op === '+' || op === '-') {
                op = '+';
                flag = true;
            }
            if (exp.length > 3)
                rhs = "(" + rhs + OppOperator(op) + exp[constIndex] + ")";
            else
                rhs = rhs + OppOperator(op) + exp[constIndex];
            if (flag) {
                if (exp[constIndex + 1] !== '-') {
                    exp.splice(constIndex, 2);
                } else {
                    exp.splice(constIndex, 2);
                    if (rhs[0] === '(')
                        rhs = "-" + rhs;
                    else
                        rhs = "-" + "(" + rhs + ")";
                }
            } else {
                exp.splice(constIndex, 2);
            }
        } else {
            op = exp[constIndex - 1];
            if (op === '+' || op === '-') {
                op = '+';
                flag = true;
            }
            if (exp.length > 3)
                rhs = "(" + rhs + OppOperator(op) + exp[constIndex] + ")";
            else
                rhs = rhs + OppOperator(op) + exp[constIndex];
            if (flag) {
                if (exp[constIndex - 1] !== '-') {
                    exp.splice(constIndex - 1, 2);
                } else {
                    exp.splice(constIndex - 1, 2);
                    if (rhs[0] === '(')
                        rhs = "-" + rhs;
                    else
                        rhs = "-" + "(" + rhs + ")";
                }
            } else {
                exp.splice(constIndex - 1, 2);
            }
        }

        // Remove the outermost brackets
        if (exp[0] === '(') {
            exp.shift();
            exp.pop();
        }
    }

    return rhs;
}


module.exports = { simplify }