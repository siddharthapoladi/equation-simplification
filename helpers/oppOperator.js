//return opposite sign

const OppOperator = (op) => {
    switch (op) {
        case "+": return "-";
            break;
        case "-": return "+";
            break;
        case "*": return "/";
            break;
        case "/": return "*";
            break;
        default: return op
    }
}


module.exports = { OppOperator }