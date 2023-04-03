// components/Button.tsx

import styled from "@emotion/styled";

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.3em;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;

export default Button;