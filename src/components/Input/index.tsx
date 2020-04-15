import React from "react";

import { Label } from "./styles";

export interface Props {
  name: string;
  value: string;
  setValue: (text: string) => void;
  type?: string;
  color?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  leftIcon?: React.ReactNode | React.Component;
  rightIcon?: React.ReactNode | React.Component;
}

export interface ILabel {
  leftIcon?: React.ReactNode | React.Component;
  rightIcon?: React.ReactNode | React.Component;
}

export const Input: React.FC<Props> = ({
  name,
  type = "text",
  color = "#1565C0",
  value,
  setValue,
  placeholder,
  style,
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <Label
      htmlFor={name}
      color={color}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    >
      <input
        style={style}
        name={name}
        type={type}
        aria-label={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
      {leftIcon && leftIcon}
      {rightIcon && rightIcon}
    </Label>
  );
};
