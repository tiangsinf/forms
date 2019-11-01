import React from "react";

const useForm = (callback, validate) => {
    // define state for fields
    const [fields, setFields] = React.useState({
        name: "",
        email: ""
    });

    // define state for errors
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleFormChange = event => {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(fields));
        setIsSubmitting(true);
    };

    /* place the callback function here so that the form only submits when
    there is no object in errors and passed handleFormSubmit. */
    React.useEffect(() => {
        // check to see if there are no errors
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        };
    })

    return { fields, handleFormChange, handleFormSubmit, errors }
};

export default useForm;