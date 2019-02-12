import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.25rem 1.25rem;
  margin: 0.5rem;
  background-color: transparent;
  color: mediumturquoise;
  border: 3px solid mediumturquoise;
  border-radius: 0.25rem;
  font-size: 16px;
  font-weight: bold;
`;

const Button = ({ children, ...attrs }) => (
  <StyledButton {...attrs}>{children}</StyledButton>
);

export default Button;
