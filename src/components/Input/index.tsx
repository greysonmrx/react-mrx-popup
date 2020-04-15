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
}

export const Input: React.FC<Props> = ({
  name,
  type = "text",
  color = "#1565C0",
  value,
  setValue,
  placeholder,
  style,
  ...props
}) => {
  return (
    <Label htmlFor={name} color={color}>
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
    </Label>
  );
};
