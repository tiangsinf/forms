export default function validateForm(fields) {

    const errors = {};

    // validate name
    if (!fields.name) {
        errors.name = "Name is required"
    } else if (fields.name.length <= 3) {
        errors.name = "Please enter a valid name"
    };

    // validate email
    const emailRegex = /\S+@\S+\.\S+/;

    if (!fields.email) {
        errors.email = "Email address is required"
    } else if (!emailRegex.test(fields.email)) {
        errors.email = "Please enter a valid email"
    };

    return errors;
};