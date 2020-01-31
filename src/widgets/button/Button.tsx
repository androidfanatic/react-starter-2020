import React, { CSSProperties, SyntheticEvent } from 'react';

export interface ButtonPropType {
  label: string;
  onClick: (e: SyntheticEvent) => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonPropType> = props => {
  return (
    <button disabled={props.disabled} style={buttonStyle} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

export const buttonStyle: CSSProperties = {
  backgroundColor: '#f47821',
  color: '#fff',
  padding: 8,
  borderRadius: 4,
  border: 'none',
  boxShadow: 'none',
};

export default Button;
