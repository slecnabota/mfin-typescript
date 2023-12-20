
import get from 'lodash/get';

interface Messages {
  [key: string]: string;
  min: string;
  max: string;
  email: string;
  regexp: string;
  equals: string;
  mask: string;
  required: string;
}

interface InputFunction {
  (name: string, self: any): {
    modelValue: string;
    'onUpdate:modelValue': (v: string) => void;
    error: string | undefined;
  };
}

const messages: Messages = {
  min: 'Value should be greater',
  max: 'Value should be smaller',
  email: 'The provided email address is invalid',
  regexp: 'Invalid format',
  equals: 'Fields do not match',
  mask: 'Enter all mask characters',
  required: 'This field is required'
};

const input: InputFunction = (name, self) => {
  const modelValue = self.get(name);
  const maskedValue = self.getMask(name) ? self.applyMask(name, modelValue) : modelValue;
  return {
    modelValue: maskedValue,
    'onUpdate:modelValue': (v: string) => self.set(name, v),
    error: get(self.getStore().formErrors, `${self.formName}.${name}.0`)
  };
};

export default {
  messages,
  input
};
