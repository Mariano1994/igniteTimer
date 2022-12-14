import styled, { css } from "styled-components";

export type ButtonVarient = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVarient;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};
export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  margin: 4px;
  border: 0;
  transition: all 0.2s;
  cursor: pointer;

  background-color: ${(props) => props.theme["green-700"]};
  color: ${(props) => props.theme.white};

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }} */
`;
