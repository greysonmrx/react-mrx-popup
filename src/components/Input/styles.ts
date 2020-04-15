import styled from "styled-components";

import { ILabel } from "./index";

export const Label = styled.label<ILabel>`
  display: flex;
  position: relative;
  margin-bottom: 2rem;

  > input {
    background-color: #19181f;
    border: 2px solid #25242c;
    border-radius: 4px;
    padding: 16px;
    padding-left: ${(props) => (props.leftIcon ? "50px" : "20px")};
    padding-right: 20px;
    color: #ffffff;
    font-size: 16px;
    transition: 180ms ease-in-out;

    & + svg {
      fill: rgba(255, 255, 255, 0.2);
      position: absolute;
      left: 15px;
      top: 16px;
      width: 22px;
      height: 22px;
      transition: 180ms ease-in-out;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.2);
    }

    &:focus {
      border: 2px solid ${(props) => props.color};

      ~ svg {
        fill: ${(props) => props.color};
      }
    }
  }
`;
