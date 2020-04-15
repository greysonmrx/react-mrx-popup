import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  position: relative;
  margin-bottom: 2rem;

  > input {
    background-color: #19181f;
    border: 2px solid #25242c;
    border-radius: 4px;
    padding: 16px;
    padding-left: 20px;
    padding-right: 20px;
    color: #ffffff;
    font-size: 16px;
    transition: 180ms ease-in-out;

    &::placeholder {
      color: rgba(255, 255, 255, 0.2);
    }

    &:focus {
      border: 2px solid ${(props) => props.color};
    }
  }
`;
