//checks if the input is an operator
const isOperator = (x) => {
    switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
        case '=':
            return true;
    }
    return false;
}

module.exports = { isOperator }