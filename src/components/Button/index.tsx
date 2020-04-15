import React from "react";
import { Container } from "./styles";

export interface Props {
  backgroundColor?: string;
  color?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Button: React.FC<Props> = ({
  children,
  backgroundColor = "#3333cc",
  color = "#ffffff",
  style,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      style={style}
      {...props}
    >
      {children}
    </Container>
  );
};
