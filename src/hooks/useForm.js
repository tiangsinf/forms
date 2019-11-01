import React from "react";

const useForm = (callback, validate) => {
    // define state for fields
    const [fields, setFields] = React.useState({
        name: "",
        email: ""
    });

    // define state for errors
    const [errors, setErrors] = React.useState({
        name: "",
        email: ""
    });

    // functions that validate these errors


    // pass these errors back to forms



    const handleFormChange = event => {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(fields));


        callback();
    };

    return { fields, handleFormChange, handleFormSubmit, errors }
};

export default useForm;