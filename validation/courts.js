const Validator = require('validator');
const validInt = require('./valid-int');
const validText = require('./valid-text');

module.exports = function validateCourtInput(data) {
    let errors = {};

    data.description = validText(data.description) ? data.description : '';
    data.type = validText(data.type) ? data.tyep : '';

    if (!Validator.isLength(data.description, { min: 1, max: 20 })) {
        errors.description = 'Description must be between 1 and 20 characters';
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = 'Description field is required';
    }

    // if (!Validator.isLength(data.type, { min: 1, max: 20 })) {
    //     errors.type = 'Court type must be between 1 and 20 characters';
    // }

    // if (Validator.isEmpty(data.type)) {
    //     errors.type = 'Court type field is required';
    // }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
};