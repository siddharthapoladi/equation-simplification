//remove empty string from array
const removeEmp = (array) => {
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i].length === 0) {
            array.splice(i, 1);
        }
    }
    return array
}

module.exports = { removeEmp }