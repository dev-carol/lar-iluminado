import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface TitleProps {
  font?: string;
  fontWeight?: keyof typeof theme.fontWeights | 'normal';
  color?: keyof typeof theme.colors;
  children: React.ReactNode;
  className?: string;
}

const StyledTitle = styled.h1<TitleProps>`
  font-family: ${(props) => props.font || props.theme.fonts.crimsonText};
  font-weight: ${(props) => props.fontWeight || props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors[props.color || 'black']};
  ${(props) => props.className};
`;

const Title: React.FC<TitleProps> = ({ font, fontWeight, color, children, className }) => {
  return (
    <StyledTitle font={font} fontWeight={fontWeight} color={color} className={className}>
      {children}
    </StyledTitle>
  );
};

export default Title;
