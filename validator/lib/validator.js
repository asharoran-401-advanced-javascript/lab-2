/* eslint-disable no-undef */
// eslint-disable-next-line strict
'use strict';

class Validator{
  constructor(personRule) {
    this.personRule = personRule;
  }
  isString(input){
    return typeof input === 'string';
  }
  isNumber(input){
    return typeof input === 'number';
  }
  isArray(input){
    return Array.isArray(input) ;
  }
  isObject(input){
    return typeof input === 'object';
  }
  isBoolean(input){
    return typeof input === 'boolean';
  }
  isFunction(input){
    return typeof input === 'function';
  }
  isCorrectType(input , key){
    switch (key) {
    case 'string': return Validator.isString(input);
    case 'number': return Validator.isNumber(input);
    case 'array': return Validator.isArray(input);
    case 'boolean': return Validator.isBoolean(input);
    case 'object': return Validator.isObject(input);
    default: return false;
    }
  }
  isValid(personRules ,data){
    let valid = true;
    for (let fieldName in personRules.fields) {
      let field = personRules.fields[fieldName];
      // Am I required and set?
      let required = field.required ? Validator.isTruthy(data[fieldName]) : true;
      // Am I the right type (if we even care)
      let type = field.type ? Validator.isCorrectType(data[fieldName], field) : true;
      // If anything is false ...
      if (!(required && type)) {
        valid = false;
      }
    }
    return valid;
  }
}

module.exports = Validator;