import React from 'react';
import { ErrorLabel } from 'storejars-react-toolkit/dist/components';

interface IProps {
  placeholder: string;
  type?: 'email' | 'password' | 'text' | 'number';
  name: string;
  value: string | number;
  required?: boolean;
  onChange: any;
  error: string;
}

export default function TextInput(props: IProps) {
  const { placeholder, type, onChange, name, value, required, error } = props;

  return (
    <div className="holder-item" style={{ marginBottom: '35px' }}>
      <input
        type={type || 'text'}
        className="form-control"
        id={name}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        required={required || false}
      />
      <ErrorLabel message={error} style={{ color: 'white', height: '3px', marginTop: '-3px' }} />
    </div>
  );
}
