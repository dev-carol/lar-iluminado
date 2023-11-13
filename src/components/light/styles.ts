import styled from 'styled-components';


export const LightContainer = styled.button`
  position: relative;
  list-style: none;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  width: 40px; /* Defina o tamanho desejado */
  height: 40px; /* Defina o tamanho desejado */

  &:hover .svg {
    fill: #f4af03;
  }

  &:hover .svg2 {
    opacity: 1;
    fill: #f4af03;
  }
`;

export const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s;
  height: 2em;
`;

export const Svg2 = styled(Svg)`
  fill: #f4af03;
  opacity: 0;
  transition: opacity 0.3s;
`;
