// validator for input value
const validator = require('validator');

const validate = {
    validateString(str) {
        return str !== '' || 'Please enter a valid response!';
    },
    validateSalary(num) {
        if (validator.isDecimal(num)) return true;
        return 'please enter a valid salary';
    },
    isSame(str1, str2) {
        if (str1 === str2) return true;
    }
};
module.exports = validate;