import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { Paper, FormControl } from 'material-ui';
import  SubmitButton from "./Submit";

const Form = props => (
  <Paper style={{ padding:15, minHeight:'20vh' }}>
    <form onSubmit={props.getWeather}>
        <FormControl >
          <InputLabel htmlFor="city">City</InputLabel>
          <Input id="city" type="text" name="city" placeholder="City" />
        </FormControl>

        <FormControl>
          <SubmitButton />
        </FormControl>

    </form>
 </Paper>
)

export default Form;
