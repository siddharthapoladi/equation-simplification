const { prettyOperator } = require("./prettyOperator")

//Function that extracts each element from the object
let arr = []


const eachElement = function (obj) {
    for (var k in obj) {
        if (typeof obj[k] == "object" && obj[k] !== null) {
            eachElement(obj[k]);
        }

        else {
            arr.push(prettyOperator(obj[k]));

        }

    }
    return arr
}

module.exports = { eachElement }