import React from 'react';

const InputField = ({ placeholder, input, type }) => (
  <div>
    <input
      {...input}
      placeholder={placeholder}
      type={type}
    />
  </div>
);

export default InputField;
