import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button'

import useForm from "../hooks/useForm";
import validate from "../validators/validate";

// styles
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  }
}));

const App = () => {
  // style handlers
  const [labelWidth, setLabelWidth] = React.useState(0);
  const labelRef = React.useRef(null);
  const classes = useStyles();

  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

  // view handlers
  const {
    fields,
    handleFormChange,
    handleFormSubmit,
    errors
  } = useForm(submitForm, validate);

  // use the following function construct for callback
  function submitForm() {
    console.log(`name: ${fields.name}, email: ${fields.email}`);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className={classes.container}>
          <FormControl
            className={classes.margin}
            variant="outlined"
            error={errors.name ? true : false}
          >
            <InputLabel ref={labelRef} htmlFor="component-outlined">
              Name
        </InputLabel>
            <OutlinedInput
              name="name"
              value={fields.name}
              onChange={handleFormChange}
              labelWidth={labelWidth}
            />
            {errors.name && <FormHelperText>{errors.name}</FormHelperText>}
          </FormControl>
        </div>
        <div className={classes.container}>
          <FormControl
            className={classes.margin}
            variant="outlined"
            error={errors.email ? true : false}
          >
            <InputLabel ref={labelRef} htmlFor="component-outlined">
              Email
        </InputLabel>
            <OutlinedInput
              name="email"
              value={fields.email}
              onChange={handleFormChange}
              labelWidth={labelWidth}
            />
            {errors.email && <FormHelperText>{errors.email}</FormHelperText>}
          </FormControl>
        </div>
        <div>
          <Button
            type="submit"
            className={classes.margin}
            variant="contained"
            color="primary"
          >
            Submit
        </Button>
        </div>
      </form>
    </>
  );
}

export default App;