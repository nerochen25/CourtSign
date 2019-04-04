const Validator = require('validator');
const validInt = require('./valid-int');
const validText = require('./valid-text');

module.exports = function validateCourtInput(data) {
    let errors = {};

    data.numOfCourts = validInt(data.numOfCourts) ? data.numOfCourts : 0;
    data.gymName = validText(data.gymName) ? data.gymName : '';

    if (!Validator.isLength(data.gymName, { min: 1, max: 20 })) {
        errors.gymName = 'Gym name must be between 1 and 20 characters';
    }

    if (Validator.isEmpty(data.gymName)) {
        errors.gymName = 'Gym name field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
};