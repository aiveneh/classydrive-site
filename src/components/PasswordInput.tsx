import React from 'react';
import { TextInput } from '.';

interface IProps {
  placeholder: string;
  name: string;
  value: string | number;
  required?: boolean;
  onChange: any;
  error: string;
}

export default function PasswordInput(props: IProps) {
  const { placeholder, onChange, name, value, required, error } = props;

  return (
    <TextInput
      placeholder={placeholder}
      name={name}
      value={value}
      required={required || false}
      error={error}
      onChange={onChange}
    />
  );
}
