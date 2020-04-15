import React from "react";
import { Container } from "./styles";

export interface Props {
  backgroundColor?: string;
  color?: string;
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  icon?: React.ReactNode | React.Component;
}

export const Button: React.FC<Props> = ({
  children,
  backgroundColor = "#3333cc",
  color = "#ffffff",
  outlined = false,
  style,
  icon,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      style={style}
      {...props}
    >
      {icon && icon}
      {children}
    </Container>
  );
};
