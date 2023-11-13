import styled from 'styled-components';

export const MenuContainer = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 1em;
  background: linear-gradient(to left, rgba(50, 40, 30, 10), #1c1b19);
  color: #f6f6f6;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: #f6f6f6;
  margin: 0 1em;
  position: relative;

  &:hover {
    border-bottom: 2px solid #AD8E00;
    padding-bottom: 3px; 
    transition: border-bottom 0.3s ease, padding-bottom 0.3s ease; 
  }
`;