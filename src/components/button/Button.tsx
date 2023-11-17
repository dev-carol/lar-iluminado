import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  background?: keyof typeof theme.colors; 
  textColor?: keyof typeof theme.colors;
  fontWeight?: keyof typeof theme.fontWeights | 'normal'; 
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.background ? theme.colors[props.background] : theme.colors.grey};
  color: ${(props) => props.textColor ? theme.colors[props.textColor] : theme.colors.white};
  font-family: ${theme.fonts.crimsonText};
  font-weight: ${(props) => {
    if (props.fontWeight === 'normal') {
      return 'normal'; 
    } else {
      return props.fontWeight ? theme.fontWeights[props.fontWeight] : theme.fontWeights.bold;
    }
  }};
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${theme.colors.goldLight};
  }
`;

const ButtonPrimary: React.FC<ButtonProps> = ({ onClick, children, className, background, textColor, fontWeight }) => {
  return (
    <StyledButton onClick={onClick} className={className} background={background} textColor={textColor} fontWeight={fontWeight}>
      {children}
    </StyledButton>
  );
};

export default ButtonPrimary;
