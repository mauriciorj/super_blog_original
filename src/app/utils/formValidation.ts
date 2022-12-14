const FormValidation = (value: any, rule: string, min: number, max: number) => {
  let check = null;

  if (rule === 'code') {
    if (value.length < min) {
      check = false;
    } else if (value.length > max) {
      check = false;
    } else {
      check = true;
    }
  }

  if (rule === 'email') {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value.length <= min) {
      return false;
    }
    if (pattern.test(value)) {
      check = true;
    } else {
      check = false;
    }
  }

  if (rule === 'password') {
    const patternNumber = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).*$/;
    if (value.length <= min) {
      check = false;
    } else if (value.length >= max) {
      check = false;
    } else if (!patternNumber.test(value)) {
      check = false;
    } else {
      check = true;
    }
  }

  if (rule === 'name') {
    const patternNumber = /^(?=.*?[0-9]).*$/;
    if (value.length <= min) {
      // check = 'Your first name have more than ' + min + ' characters.';
      check = false;
    } else if (value.length >= max) {
      // check = 'Your first name have less than ' + max + ' characters.';
      check = false;
    } else if (patternNumber.test(value)) {
      // check = 'Your name can\'t have digit.';
      check = false;
    } else {
      check = true;
    }
  }

  if (rule === 'mobile') {
    const patternNumber = /^(?=.*?[A-z]).*$/;
    if (value.length === 0) {
      check = false;
    } else if (value.length <= min) {
      check = false;
    } else if (patternNumber.test(value)) {
      check = false;
    } else {
      check = true;
    }
  }

  return check;
};

export default FormValidation;
