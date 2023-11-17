import styled from 'styled-components';

export const IconsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;

`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px; 
  width: 20%; 
  box-sizing: border-box; 

  @media (max-width: 768px) {
    width: 100%; 
    justify-content: space-between;
  }
  
`;

export const CheckboxLabel = styled.span`
  margin-top: 0.5rem;
  text-align: center;
`;
