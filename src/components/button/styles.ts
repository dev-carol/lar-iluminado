import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Button = styled.button`
  background-color: ${theme.colors.goldLight};
  color: ${theme.colors.white};
  font-family: ${theme.fonts.crimsonText};
  font-weight: ${theme.fontWeights.bold};
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${theme.colors.grey};
  }
`;
