import React from 'react';

import classes from './Input.css';

const input = props => {
  let validationError = null;
  if (props.invald && props.touched) {
    validationError = (
      <p className={classes.ValidationError}>Please enter a valid value!</p>
    );
  }
  const inputClasses = [classes.inputElement];
  let inputElement = null;

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementtype) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementconfig}
          value={props.value}
          onChange={props.inputchanged}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementconfig}
          value={props.value}
          onChange={props.inputchanged}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          {...props}
          value={props.value}
        >
          {props.elementconfig.options.map(option => (
            <option
              key={option.value}
              value={option.value}
              onChange={props.inputchanged}
            >
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementconfig}
          value={props.value}
          onChange={props.inputchanged}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default input;
