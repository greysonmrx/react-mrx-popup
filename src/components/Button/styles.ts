import styled from "styled-components";
import { lighten, darken, readableColor } from "polished";

import { Props } from "./index";

export const Container = styled.button<Props>`
  min-width: 100px;
  font-size: 17px;
  background-color: ${(props) =>
    props.outlined ? "transparent" : props.backgroundColor};
  color: ${({ color }: Props) =>
    readableColor(color as string, "#ffffff", "#19181f")};
  height: 50px;
  padding: 0 20px;
  font-weight: 500;
  border-radius: 4px;
  border: ${(props) =>
    props.outlined ? `2px solid ${props.backgroundColor}` : "none"};
  cursor: pointer;
  transition: 100ms linear;

  &:hover {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    border-color: transparent;
    background-color: ${(props) =>
      props.outlined
        ? props.backgroundColor
        : lighten(0.03, props.backgroundColor as string)};
  }

  :active {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    background-color: ${(props) =>
      darken(0.03, props.backgroundColor as string)};
  }
`;
