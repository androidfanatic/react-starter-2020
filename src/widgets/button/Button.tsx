import React, { SyntheticEvent } from 'react';

export interface ButtonPropType {
  label: string;
  onClick: (e: SyntheticEvent) => void;
}

const Button: React.FC<ButtonPropType> = props => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

export default Button;
