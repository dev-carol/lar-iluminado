import styled from 'styled-components';

export const MenuContainer = styled.nav<{ open: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1em;
  background: linear-gradient(to left, rgba(50, 40, 30, 10), #1c1b19);

  color: #f6f6f6;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1c1b19;
    z-index: 1000;
    overflow-y: auto;
    padding-top: 50px;
    transform: ${({ open }: { open: boolean }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
    overflow-y: ${({ open }: { open: boolean }) => (open ? 'hidden' : 'auto')}; /* Esconde o scroll quando o menu hamburguer está aberto */

  }
}`;


export const MenuItem = styled.a`
  text-decoration: none;
  color: #f6f6f6;
  margin: 0 1em;
  position: relative;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #ad8e00;
    padding-bottom: 3px;
    transition: border-bottom 0.3s ease, padding-bottom 0.3s ease;
  }

  @media (max-width: 768px) {
    margin: 15px 0;  
  }
`;

export const MenuButton = styled.div`
  display: none;
  background: #f6f6f6;
  color: #1c1b19;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 15px;
    right: 15px; /* Alterado de 'left' para 'right' */
    cursor: pointer;
    z-index: 1100;
  }
`;
