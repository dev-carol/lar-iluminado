import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: 350px;
  background: #f6f6f6;
  position: relative;
  padding: 1.8rem;
  transition: 0.5s ease-out;
  overflow: visible;
  margin: 1rem;
  border: 1px solid #C9AB81;
  &:hover {
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.50);
  }
`;

export const CardDetails = styled.div`
  color: black;
  height: 100%;
  gap: 0.5em;
  display: grid;
  place-content: center;
`;

export const CardButton = styled.button`
  transform: translate(-50%, 50%);
  width: 60%;
  border-radius: 20px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #c9ab81;
  color: #1c1b19;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
  ${CardContainer}:hover & {
    transform: translate(-50%, 50);
    opacity: 1;
  }
`;

export const ImgBody = styled.img`
  width: 200px;
  height: 250px;
`;

export const TextTitle = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`;
